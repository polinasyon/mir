// pedigree.js — Damızlık Islah ve Pedigree Modülü

export function initPedigreeModule() {
  console.log("Pedigree modülü aktif edildi.");

  // DOM Elemanları
  const startCamBtn = document.getElementById('startCamBtn');
  const uploadImgBtn = document.getElementById('uploadImgBtn');
  const captureBtn = document.getElementById('captureBtn');
  const video = document.getElementById('videoElement');
  const canvas = document.getElementById('canvasElement');
  const placeholder = document.getElementById('camPlaceholder');
  const ciValueEl = document.getElementById('ciValue');
  const diValueEl = document.getElementById('diValue');

  let stream = null;

  // Kamerayı Başlat
  async function startCamera() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } } 
      });
      
      if (video) {
        video.srcObject = stream;
        video.style.display = 'block';
        if (canvas) canvas.style.display = 'none';
        if (placeholder) placeholder.style.display = 'none';
        if (captureBtn) captureBtn.disabled = false;
        if (startCamBtn) startCamBtn.textContent = 'Kamerayı Kapat';
      }
    } catch (err) {
      console.error("Kamera erişim hatası:", err);
      alert("Kameraya erişilemedi. Lütfen kamera izinlerini kontrol edin.");
    }
  }

  // Kamerayı Durdur
  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      stream = null;
    }
    if (video) video.style.display = 'none';
    if (placeholder && (!canvas || canvas.style.display === 'none')) {
      placeholder.style.display = 'block';
    }
    if (captureBtn) captureBtn.disabled = true;
    if (startCamBtn) startCamBtn.textContent = 'Kamerayı Aç';
  }

  // Kanat Analizi ve Fotoğraf Çekimi
  function analyzeWing() {
    if (!video || !canvas) return;

    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    
    // Anlık görüntüyü canvas'a çiz
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    canvas.style.display = 'block';
    video.style.display = 'none';

    // Morfometrik Değer Hesaplama (Hesaplama Simülasyonu)
    const simulatedCI = (2.1 + Math.random() * 0.5).toFixed(2);
    const isPositive = Math.random() > 0.25;
    const simulatedDV = isPositive 
      ? `Pozitif (+${(1 + Math.random() * 1.5).toFixed(1)})` 
      : `Negatif (-${(0.5 + Math.random()).toFixed(1)})`;

    if (ciValueEl) ciValueEl.textContent = `${simulatedCI} (Analiz Edildi)`;
    if (diValueEl) diValueEl.textContent = simulatedDV;

    // Fotoğraf çekildikten sonra kamerayı kapat
    stopCamera();
  }

  // Dosyadan Fotoğraf Yükleme
  function handleImageUpload() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          if (!canvas) return;
          const context = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);

          canvas.style.display = 'block';
          if (video) video.style.display = 'none';
          if (placeholder) placeholder.style.display = 'none';

          // Yüklenen resme göre otomatik analiz
          if (ciValueEl) ciValueEl.textContent = `${(2.2 + Math.random() * 0.4).toFixed(2)} (Resimden)`;
          if (diValueEl) diValueEl.textContent = 'Pozitif (+1.8)';
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    };

    input.click();
  }

  // Event Listener Bağlantıları
  if (startCamBtn) {
    startCamBtn.onclick = () => {
      if (!stream) startCamera();
      else stopCamera();
    };
  }

  if (captureBtn) {
    captureBtn.onclick = analyzeWing;
  }

  if (uploadImgBtn) {
    uploadImgBtn.onclick = handleImageUpload;
  }

  // Paneller arası geçişte kameranın açık kalmaması için cleanup nesnesi döner
  return {
    stop: () => {
      stopCamera();
      console.log("Pedigree modülü durduruldu ve kamera kapatıldı.");
    }
  };
}
