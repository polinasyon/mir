import { floraVeritabani } from './floraveritabani.js';
import { bolgeHaritasi } from './bolgeharitasi.js';

export class NektarModule {
  constructor() {
    this.currentLocation = "Ankara";
  }

  init() {
    this.bindDOM();
    this.loadDefaultLocation();
  }

  bindDOM() {
    this.elements = {
      havaLokasyon: document.getElementById('havaLokasyon'),
      bolgeFloraHaritasi: document.getElementById('bolgeFloraHaritasi'),
      havaSicaklik: document.getElementById('havaSicaklik'),
      havaNem: document.getElementById('havaNem'),
      havaCiy: document.getElementById('havaCiy'),
      havaRuzgar: document.getElementById('havaRuzgar'),
      havaYagis: document.getElementById('havaYagis'),
      havaBulut: document.getElementById('havaBulut'),
      nektarDurumEtiketi: document.getElementById('nektarDurumEtiketi'),
      nektarSkor: document.getElementById('nektarSkor'),
      uiGecmis: document.getElementById('uiGecmis'),
      uiFenoloji: document.getElementById('uiFenoloji'),
      nektarBar: document.getElementById('nektarBar'),
      nektarAciklama: document.getElementById('nektarAciklama'),
      dinamikDuzeltmeNotu: document.getElementById('dinamikDuzeltmeNotu'),
      floraTimelineContainer: document.getElementById('floraTimelineContainer')
    };
  }

  loadDefaultLocation() {
    this.hesaplaVeGuncelle(24, 45, 12, "Hafif Esinti", "Yok", 20, "Ankara");
    this.renderFloraTimeline();
    
    // Lucide ikonlarını güvenle tetikle (Eğer kütüphane yüklüyse)
    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  hesaplaVeGuncelle(temp, humidity, dewPoint, wind, rain, cloud, locationName) {
    if (locationName && this.elements.havaLokasyon) {
      this.elements.havaLokasyon.textContent = locationName;
    }

    let baseTemp = 10;
    let gdd = Math.max(0, temp - baseTemp);
    let score = Math.min(100, Math.max(10, Math.round((temp / 30) * 70 + (100 - humidity) * 0.3)));
    
    if (this.elements.havaSicaklik) this.elements.havaSicaklik.textContent = `${temp}°C`;
    if (this.elements.havaNem) this.elements.havaNem.textContent = `${humidity}%`;
    if (this.elements.havaCiy) this.elements.havaCiy.textContent = `${dewPoint}°C`;
    if (this.elements.havaRuzgar) this.elements.havaRuzgar.textContent = wind;
    if (this.elements.havaYagis) this.elements.havaYagis.textContent = `${rain}`;
    if (this.elements.havaBulut) this.elements.havaBulut.textContent = `${cloud}%`;

    if (this.elements.nektarSkor) this.elements.nektarSkor.textContent = `%${score}`;
    if (this.elements.nektarBar) this.elements.nektarBar.style.width = `${score}%`;
    
    if (this.elements.uiGecmis) {
      this.elements.uiGecmis.textContent = `${temp}°C Ortalama`;
    }

    if (this.elements.uiFenoloji) {
      this.elements.uiFenoloji.textContent = `GDD: ${gdd} (${score > 60 ? 'Yüksek' : 'Orta'} Kapasite)`;
    }

    if (this.elements.nektarDurumEtiketi) {
      this.elements.nektarDurumEtiketi.textContent = score > 60 ? "AKTİF AKIM" : "SINIRLI AKIM";
      this.elements.nektarDurumEtiketi.className = score > 60 
        ? "text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-700" 
        : "text-[10px] font-extrabold px-2 py-0.5 rounded-md bg-amber-100 text-amber-700";
    }

    if (this.elements.nektarAciklama) {
      this.elements.nektarAciklama.textContent = score > 60 
        ? "Mükemmel nektar akım koşulları gözleniyor. Tarlacı arılar aktif ve nektar akışı güçlü." 
        : "Sıcaklık veya nem koşulları nektar salgısını sınırlandırıyor. Ek besleme gerekebilir.";
    }

    if (this.elements.bolgeFloraHaritasi) {
      this.elements.bolgeFloraHaritasi.textContent = `Flora: ${locationName} Bölge Analizi Aktif`;
    }
  }

  otomatikKonumBul() {
    if (navigator.geolocation) {
      if (this.elements.havaLokasyon) this.elements.havaLokasyon.textContent = "Konum alınıyor...";
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Örnek koordinat bazlı simülasyon veya gerçek hava durumu API entegrasyonu
          this.hesaplaVeGuncelle(26, 40, 14, "Normal", "Yok", 15, "GPS Konumu");
        },
        (error) => {
          alert("Konum alınamadı. Lütfen tarayıcı izinlerini kontrol edin.");
          if (this.elements.havaLokasyon) this.elements.havaLokasyon.textContent = "Ankara";
        }
      );
    } else {
      alert("Tarayıcınız konum servisini desteklemiyor.");
    }
  }

  konumModaliniAc() {
    const yeniKonum = prompt("Lütfen arıcılık yaptığınız bölgeyi/şehri girin:", this.currentLocation);
    if (yeniKonum && yeniKonum.trim() !== "") {
      this.currentLocation = yeniKonum.trim();
      this.hesaplaVeGuncelle(25, 42, 13, "Hafif", "Yok", 25, this.currentLocation);
    }
  }

  renderFloraTimeline() {
    if (!this.elements.floraTimelineContainer) return;
    
    let floralar = [];
    try {
      if (floraVeritabani && typeof floraVeritabani.getListesi === 'function') {
        florar = floraVeritabani.getListesi();
      }
    } catch (e) {
      console.warn("Flora veritabanı yüklenemedi:", e);
    }

    if (!florar || florar.length === 0) {
      florar = [
        { ad: "Akasya", donem: "Mayıs - Haziran", durum: "Güçlü Nektar" },
        { ad: "Kestane", donem: "Haziran - Temmuz", durum: "Polen / Orta Akım" },
        { ad: "Çam / Pırnar", donem: "Ağustos - Eylül", durum: "Salgı Nejatı" }
      ];
    }

    let html = "";
    florar.forEach(f => {
      html += `
        <div class="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
          <div>
            <p class="text-xs font-bold text-slate-800">${f.ad || f.isim || 'Flora'}</p>
            <p class="text-[10px] text-slate-500">${f.donem || ''}</p>
          </div>
          <span class="text-[10px] font-bold px-2 py-1 rounded bg-amber-100 text-amber-800">${f.durum || 'Aktif'}</span>
        </div>
      `;
    });

    this.elements.floraTimelineContainer.innerHTML = html;
  }
}

