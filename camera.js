/**
 * Kamera Yönetimi + Piksel Kontrast Kontrolü +
 * OpenCV.js tabanlı Otomatik Kanat Keypoint Tespiti +
 * 3 Nokta Nirengi (CI / Discoidal)
 */
export class CameraService {
  constructor(videoElement, canvasElement, placeholderElement) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d', { willReadFrequently: true });
    this.placeholder = placeholderElement;

    this.stream = null;
    this.points = [];
    this.capturedImageData = null;

    this.autoDetectionMode = true;
    this.cvReady = false;
    this.opencvLoading = false;

    // Arka planda yüklemeyi başlat
    this.ensureOpenCV();
  }

  ensureOpenCV() {
    if (this.cvReady || this.opencvLoading) {
      return Promise.resolve(this.cvReady);
    }

    this.opencvLoading = true;

    return new Promise((resolve) => {
      if (typeof cv !== 'undefined' && cv.Mat) {
        this.cvReady = true;
        this.opencvLoading = false;
        resolve(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://docs.opencv.org/4.10.0/opencv.js';
      script.async = true;

      script.onload = () => {
        const check = setInterval(() => {
          if (typeof cv !== 'undefined' && cv.Mat) {
            clearInterval(check);
            this.cvReady = true;
            this.opencvLoading = false;
            console.log('[CameraService] OpenCV.js hazır');
            resolve(true);
          }
        }, 50);
      };

      script.onerror = () => {
        console.warn('[CameraService] OpenCV.js yüklenemedi');
        this.opencvLoading = false;
        resolve(false);
      };

      document.head.appendChild(script);
    });
  }

  async toggle() {
    if (this.stream) {
      this.stop();
      return false;
    }
    return await this.start();
  }

  async start() {
    try {
      this.ensureOpenCV();

      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        },
        audio: false
      });

      this.video.srcObject = this.stream;
      await this.video.play();

      this.video.style.display = 'block';
      this.placeholder.style.display = 'none';
      this.canvas.style.display = 'none';

      return true;
    } catch (error) {
      console.error('Kamera erişim hatası:', error);
      alert('Kamera açılamadı. Lütfen izinleri kontrol edin.');
      return false;
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop());
      this.stream = null;
      this.video.srcObject = null;
      this.video.style.display = 'none';
      this.canvas.style.display = 'none';
      this.placeholder.style.display = 'block';
    }
    this.resetPoints();
  }

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

  /**
   * SENKRON tutuldu → pedigree.js bozulmasın
   * OpenCV hazırsa otomatik nokta dener
   */
  captureAndValidate() {
    if (!this.stream) {
      return { valid: false, reason: 'Kamera kapalı.' };
    }

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

    const contrastScore = totalVariance / (pixelCount || 1);

    if (contrastScore < 6.5) {
      return {
        valid: false,
        reason: '⚠️ Görüntüde kanat damarı/dokusu tespit edilemedi. Lütfen net bir kanat fotoğrafı çekin.'
      };
    }

    this.capturedImageData = imgData;
    this.video.style.display = 'none';
    this.canvas.style.display = 'block';
    this.points = [];

    // OpenCV hazırsa otomatik tespit (senkron)
    if (this.autoDetectionMode && this.cvReady) {
      try {
        const detected = this.detectWingKeypoints(imgData);
        if (detected && detected.length === 3) {
          this.points = detected;
          this.redrawCanvas();
          const metrics = this.calculateMetrics();
          if (metrics) {
            return { valid: true, autoDetected: true, metrics };
          }
        }
      } catch (err) {
        console.warn('Otomatik keypoint hatası:', err);
      }
    }

    return { valid: true, autoDetected: false };
  }

  detectWingKeypoints(imgData) {
    if (!this.cvReady) return null;

    let src, gray, blurred, edges, corners;
    try {
      src = cv.matFromImageData(imgData);
      gray = new cv.Mat();
      cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

      blurred = new cv.Mat();
      cv.GaussianBlur(gray, blurred, new cv.Size(5, 5), 0);

      edges = new cv.Mat();
      cv.Canny(blurred, edges, 40, 120);

      corners = new cv.Mat();
      cv.goodFeaturesToTrack(gray, corners, 40, 0.01, 18, edges);

      if (corners.rows < 3) return null;

      const candidates = [];
      for (let i = 0; i < corners.rows; i++) {
        candidates.push({
          x: corners.data32F[i * 2],
          y: corners.data32F[i * 2 + 1]
        });
      }

      return this.selectBestTriangle(candidates, imgData.width, imgData.height);
    } catch (err) {
      console.error('OpenCV keypoint hatası:', err);
      return null;
    } finally {
      if (src) src.delete();
      if (gray) gray.delete();
      if (blurred) blurred.delete();
      if (edges) edges.delete();
      if (corners) corners.delete();
    }
  }

  selectBestTriangle(candidates, width, height) {
    if (candidates.length < 3) return null;

    candidates.sort((a, b) => a.x - b.x);

    const left = candidates[0];
    const right = candidates[candidates.length - 1];

    let bestMid = null;
    let maxDist = 0;

    for (const p of candidates) {
      if (p === left || p === right) continue;
      const dist = this.pointLineDistance(p, left, right);
      if (dist > maxDist) {
        maxDist = dist;
        bestMid = p;
      }
    }

    if (!bestMid || maxDist < height * 0.035) {
      return [
        candidates[0],
        candidates[Math.floor(candidates.length / 2)],
        candidates[candidates.length - 1]
      ];
    }

    return [left, bestMid, right];
  }

  pointLineDistance(p, a, b) {
    const A = p.x - a.x;
    const B = p.y - a.y;
    const C = b.x - a.x;
    const D = b.y - a.y;
    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    const param = lenSq !== 0 ? dot / lenSq : -1;

    let xx, yy;
    if (param < 0) {
      xx = a.x;
      yy = a.y;
    } else if (param > 1) {
      xx = b.x;
      yy = b.y;
    } else {
      xx = a.x + param * C;
      yy = a.y + param * D;
    }

    const dx = p.x - xx;
    const dy = p.y - yy;
    return Math.sqrt(dx * dx + dy * dy);
  }

  addPoint(x, y) {
    if (this.points.length >= 3) {
      this.points = [];
    }

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
      this.ctx.arc(pt.x, pt.y, 7, 0, 2 * Math.PI);
      this.ctx.fillStyle = colors[index];
      this.ctx.fill();
      this.ctx.lineWidth = 2;
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.stroke();

      this.ctx.font = 'bold 16px sans-serif';
      this.ctx.fillStyle = '#ffffff';
      this.ctx.fillText(` ${labels[index]}`, pt.x + 10, pt.y - 10);
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
    this.ctx.lineWidth = 2.5;
    this.ctx.stroke();
  }

  calculateMetrics() {
    if (this.points.length < 3) return null;

    const [pA, pB, pC] = this.points;
    const distAB = Math.hypot(pB.x - pA.x, pB.y - pA.y);
    const distBC = Math.hypot(pC.x - pB.x, pC.y - pB.y);

    if (distBC === 0) return null;

    const ci = (distAB / distBC).toFixed(2);

    const deltaX = pC.x - pB.x;
    let rawDiscoidal = 'nötr';
    if (Math.abs(deltaX) > 8) {
      rawDiscoidal = deltaX > 0 ? 'pozitif' : 'negatif';
    }

    const diVal = (Math.abs(deltaX) / 10).toFixed(1);
    const di = `${rawDiscoidal.charAt(0).toUpperCase() + rawDiscoidal.slice(1)} (±${diVal})`;

    return { ci, di, rawDiscoidal };
  }
}
