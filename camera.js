/**
 * Kamera Yönetimi, Piksel Kontrast Kontrolü ve 3 Nokta Nirengi (Landmark) Servisi
 */
export class CameraService {
  constructor(videoElement, canvasElement, placeholderElement) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.ctx = canvasElement ? canvasElement.getContext('2d') : null;
    this.placeholder = placeholderElement;
    this.stream = null;
    this.points = []; // Kullanıcının tıkladığı A, B, C noktaları
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

      if (this.video) {
        this.video.srcObject = this.stream;
        this.video.style.display = 'block';
      }
      if (this.placeholder) this.placeholder.style.display = 'none';
      if (this.canvas) this.canvas.style.display = 'none';

      return true;
    } catch (error) {
      console.error('Kamera erişim hatası:', error);
      alert('Kamera açılamadı. Lütfen kamera izinlerini kontrol edin.');
      return false;
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    if (this.video) {
      this.video.srcObject = null;
      this.video.style.display = 'none';
    }
    if (this.canvas) this.canvas.style.display = 'none';
    if (this.placeholder) this.placeholder.style.display = 'block';

    this.resetPoints();
  }

  // App.js veya dış modüllerin rahatça çağırabilmesi için
  stopStream() {
    this.stop();
  }

  // Yeni fotoğraf çekildiğinde veya iptal edildiğinde noktaları sıfırlar
  resetPoints() {
    this.points = [];
    if (this.capturedImageData && this.ctx) {
      this.ctx.putImageData(this.capturedImageData, 0, 0);
    }
  }

  /**
   * 1. AŞAMA: Otomatik Piksel ve Kontrast Tespiti (Görüntü Doğrulama)
   */
  captureAndValidate() {
    if (!this.stream || !this.video) {
      return { valid: false, reason: '⚠️ Kamera kapalı veya hazır değil.' };
    }

    if (!this.canvas || !this.ctx) {
      return { valid: false, reason: '⚠️ Canvas elementi bulunamadı.' };
    }

    // Canvas boyutlarını video kaynak çözünürlüğüne eşitle
    this.canvas.width = this.video.videoWidth || 640;
    this.canvas.height = this.video.videoHeight || 480;
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    const imgData = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imgData.data;

    // Laplacian / Variance Kontrast Taraması (Kenar Yoğunluğu Hesabı)
    let totalVariance = 0;
    let pixelCount = 0;

    for (let i = 0; i < data.length; i += 16) { // Hızlı piksel örnekleme
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      const nextAvg = (data[i + 4] + data[i + 5] + data[i + 6]) / 3 || avg;
      totalVariance += Math.abs(avg - nextAvg);
      pixelCount++;
    }

    const contrastScore = totalVariance / pixelCount;

    // Düz zemin/odak dışı görsellerde kontrast skoru düşük çıkar
    if (contrastScore < 6.5) {
      return {
        valid: false,
        reason: '⚠️ Görüntüde kanat damarı/dokusu tespit edilemedi. Lütfen net bir kanat fotoğrafı çekin.'
      };
    }

    // Doğrulama başarılı ise görseli canvas üzerinde dondur
    this.capturedImageData = imgData;
    this.video.style.display = 'none';
    this.canvas.style.display = 'block';
    this.points = [];

    return { valid: true };
  }

  /**
   * 2. AŞAMA: Manuel Nirengi Tıklama Yönetimi
   */
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
    if (!this.ctx) return;

    if (this.capturedImageData) {
      this.ctx.putImageData(this.capturedImageData, 0, 0);
    }

    const labels = ['A', 'B', 'C'];
    const colors = ['#ef4444', '#3b82f6', '#10b981'];

    this.points.forEach((pt, index) => {
      // Nokta Çizimi
      this.ctx.beginPath();
      this.ctx.arc(pt.x, pt.y, 6, 0, 2 * Math.PI);
      this.ctx.fillStyle = colors[index];
      this.ctx.fill();
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.stroke();

      // Etiket Yazısı
      this.ctx.font = 'bold 14px sans-serif';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(` ${labels[index]}`, pt.x + 8, pt.y - 8);
    });

    // Çizgi Çizimi (A-B ve B-C damar mesafeleri)
    if (this.points.length >= 2) {
      this.drawLine(this.points[0], this.points[1], '#ef4444');
    }
    if (this.points.length === 3) {
      this.drawLine(this.points[1], this.points[2], '#3b82f6');
    }
  }

  drawLine(pt1, pt2, color) {
    if (!this.ctx) return;
    this.ctx.beginPath();
    this.ctx.moveTo(pt1.x, pt1.y);
    this.ctx.lineTo(pt2.x, pt2.y);
    this.ctx.strokeStyle = color;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
  }

  /**
   * Öklid Mesafesi ile Kübital İndeks (CI) Hesabı
   */
  calculateMetrics() {
    const [pA, pB, pC] = this.points;

    // A-B Mesafesi (a damarı)
    const distAB = Math.hypot(pB.x - pA.x, pB.y - pA.y);
    // B-C Mesafesi (b damarı)
    const distBC = Math.hypot(pC.x - pB.x, pC.y - pB.y);

    if (distBC === 0) return null;

    const ci = (distAB / distBC).toFixed(2);
    
    // Açısal Yerleşimden Diskoidal Kayma Çıkarımı
    const isPositive = pC.x > pB.x; 
    const diVal = (Math.abs(pC.x - pB.x) / 10).toFixed(1);
    const di = (isPositive ? 'Pozitif' : 'Negatif') + ` (+${diVal})`;

    return { ci, di, rawDiscoidal: isPositive ? 'Pozitif' : 'Negatif' };
  }
}
