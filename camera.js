export class CameraService {
  constructor(videoElement, canvasElement, placeholderElement) {
    this.video = videoElement;
    this.canvas = canvasElement;
    this.placeholder = placeholderElement;
    this.stream = null;
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
      return true;
    } catch (error) {
      console.error('Kamera erişim hatası:', error);
      alert('Kamera açılamadı. İzinleri kontrol edin ve HTTPS/localhost üzerinden erişin.');
      return false;
    }
  }

  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
      this.video.srcObject = null;
      this.video.style.display = 'none';
      this.placeholder.style.display = 'block';
    }
  }

  captureAndAnalyze() {
    if (!this.stream) return null;

    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;
    const ctx = this.canvas.getContext('2d');
    ctx.drawImage(this.video, 0, 0);

    const ci = (2.1 + Math.random() * 1.0).toFixed(2);
    const diVal = (Math.random() * 2.5).toFixed(1);
    const di = (Math.random() > 0.4 ? 'Pozitif' : 'Negatif') + ` (+${diVal})`;

    return { ci, di };
  }
}
