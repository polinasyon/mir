/**
 * Kamera Yönetimi, Piksel Kontrast Kontrolü ve 3 Nokta Nirengi Servisi
 * İyileştirilmiş Diskoidal Çıkarımı + resetPoints eklendi
 */
export class CameraService {
  constructor(videoElement, canvasElement, placeholderElement) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.placeholder = placeholderElement;
    this.stream = null;
    this.points = [];
    this.capturedImageData = null;
  }

  async toggle() {
    if (this.stream) {
      this.stop();
      return false;
    } else {
      return await this.start();
    }
  }

  async start() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
        audio: false
      });
      this.video.srcObject = this.stream;
      this.video.style.display = 'block';
      this.placeholder.style.display = 'none';
      this.canvas.style.display = 'none';
      return true;
    } catch (error) {
      console.error('Kamera erişim hatası:', error);
      alert('Kamera açılamadı. İzinleri kontrol edin.');
      return false;
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
      this.video.srcObject = null;
      this.video.style.display = 'none';
      this.canvas.style.display = 'none';
      this.placeholder.style.display = 'block';
    }
    this.points = [];
    this.capturedImageData = null;
  }

  // ★★★ EKLENEN METOD ★★★
  resetPoints() {
    this.points = [];
    this.capturedImageData = null;
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    this.canvas.style.display = 'none';
    if (this.stream) {
      this.video.style.display = 'block';
    }
  }

  captureAndValidate() {
    if (!this.stream) return { valid: false, reason: 'Kamera kapalı.' };

    this.canvas.width = this.video.videoWidth || 640;
    this.canvas.height = this.video.videoHeight || 480;
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imgData.data;

    let totalVariance = 0;
    let pixelCount = 0;

    for (let i = 0; i < data.length; i += 16) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const nextAvg = (data[i + 4] + data[i + 5] + data[i + 6]) / 3 || avg;
      totalVariance += Math.abs(avg - nextAvg);
      pixelCount++;
    }

    const contrastScore = totalVariance / pixelCount;

    // Eşik biraz düşürüldü (eski 6.5 → 5.0) – daha toleranslı
    if (contrastScore < 5.0) {
      return {
        valid: false,
        reason: '⚠️ Görüntüde kanat damarı/dokusu tespit edilemedi. Lütfen net bir kanat fotoğrafı çekin.'
      };
    }

    this.capturedImageData = imgData;
    this.video.style.display = 'none';
    this.canvas.style.display = 'block';
    this.points = [];

    return { valid: true };
  }

  addPoint(x, y) {
    if (this.points.length >= 3) return null;

    this.points.push({ x, y });
    this.redrawCanvas();

    if (this.points.length === 3) {
      return this.calculateMetrics();
    }
    return null;
  }

  redrawCanvas() {
    if (this.capturedImageData) {
      this.ctx.putImageData(this.capturedImageData, 0, 0);
    }

    const labels = ['A', 'B', 'C'];
    const colors = ['#ef4444', '#3b82f6', '#10b981'];

    this.points.forEach((pt, index) => {
      this.ctx.beginPath();
      this.ctx.arc(pt.x, pt.y, 6, 0, 2 * Math.PI);
      this.ctx.fillStyle = colors[index];
      this.ctx.fill();
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.stroke();

      this.ctx.font = 'bold 14px sans-serif';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(` ${labels[index]}`, pt.x + 8, pt.y - 8);
    });

    if (this.points.length >= 2) {
      this.drawLine(this.points[0], this.points[1], '#ef4444');
    }
    if (this.points.length === 3) {
      this.drawLine(this.points[1], this.points[2], '#3b82f6');
    }
  }

  drawLine(pt1, pt2, color) {
    this.ctx.beginPath();
    this.ctx.moveTo(pt1.x, pt1.y);
    this.ctx.lineTo(pt2.x, pt2.y);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  calculateMetrics() {
    const [pA, pB, pC] = this.points;

    const distAB = Math.hypot(pB.x - pA.x, pB.y - pA.y);
    const distBC = Math.hypot(pC.x - pB.x, pC.y - pB.y);

    if (distBC === 0) return null;

    const ci = (distAB / distBC).toFixed(2);

    const deltaX = pC.x - pB.x;
    const deltaY = pC.y - pB.y;

    let rawDiscoidal;
    if (Math.abs(deltaX) < 8) {
      rawDiscoidal = 'nötr';
    } else if (deltaX > 0) {
      rawDiscoidal = 'pozitif';
    } else {
      rawDiscoidal = 'negatif';
    }

    const diVal = (Math.abs(deltaX) / 10).toFixed(1);
    const di = `${rawDiscoidal.charAt(0).toUpperCase() + rawDiscoidal.slice(1)} (±${diVal})`;

    return {
      ci,
      di,
      rawDiscoidal
    };
  }
}
