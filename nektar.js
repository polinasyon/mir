import { FloraVeritabani } from './floraVeritabani.js';
import { BolgeHaritasi } from './bolgeHaritasi.js'; // Varsa mevcut bölge haritası servisin

export class NektarModule {
  constructor() {
    this.currentLocation = "Ankara";
    this.weatherData = null;
  }

  init() {
    this.bindDOM();
    this.loadDefaultLocation();
  }

  bindDOM() {
    // DOM element bağlamaları
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
    // Varsayılan hesaplama ve GDD tetikleme simülasyonu
    this.calculateGDDAndNectar(24, 45, 12, "Hafif Esinti", "Yok", 20);
    this.renderFloraTimeline();
  }

  calculateGDDAndNectar(temp, humidity, dewPoint, wind, rain, cloud) {
    // GDD (Growing Degree Days) ve Nektar Skoru Algoritması
    let baseTemp = 10; // Arı uçuş ve bitki gelişimi baz sıcaklığı
    let gdd = Math.max(0, temp - baseTemp);
    
    let score = Math.min(100, Math.max(10, Math.round((temp / 30) * 70 + (100 - humidity) * 0.3)));
    
    if (this.elements.havaSicaklik) this.elements.havaSicaklik.textContent = `${temp}°C`;
    if (this.elements.havaNem) this.elements.havaNem.textContent = `${humidity}%`;
    if (this.elements.havaCiy) this.elements.havaCiy.textContent = `${dewPoint}°C`;
    if (this.elements.havaRuzgar) this.elements.havaRuzgar.textContent = wind;
    if (this.elements.havaYagis) this.elements.havaYagis.textContent = rain;
    if (this.elements.havaBulut) this.elements.havaBulut.textContent = `${cloud}%`;

    if (this.elements.nektarSkor) this.elements.nektarSkor.textContent = `%${score}`;
    if (this.elements.nektarBar) this.elements.nektarBar.style.width = `${score}%`;
    
    if (this.elements.uiFenoloji) {
      this.elements.uiFenoloji.textContent = `GDD: ${gdd} (İyi Seviye)`;
    }

    if (this.elements.nektarAciklama) {
      this.elements.nektarAciklama.textContent = score > 60 
        ? "Mükemmel nektar akım koşulları gözleniyor. Tarlacı arılar aktif." 
        : "Sıcaklık veya nem koşulları nektar salgısını sınırlandırıyor.";
    }
  }

  renderFloraTimeline() {
    if (!this.elements.floraTimelineContainer) return;
    
    const floralar = typeof FloraVeritabani !== 'undefined' ? FloraVeritabani.getListesi() : [
      { ad: "Akasya", donem: "Mayıs - Haziran", durum: "Güçlü Nektar", renk: "emerald" },
      { ad: "Kestane", donem: "Haziran - Temmuz", durum: "Polen / Orta Akım", renk: "amber" },
      { ad: "Çam / Pırnar", donem: "Ağustos - Eylül", durum: "Salgı Nejatı", renk: "slate" }
    ];

    let html = "";
    florar.forEach(f => {
      html += `
        <div class="flex items-center justify-between p-2.5 bg-white/60 border border-slate-200 rounded-xl">
          <div>
            <p class="text-xs font-bold text-slate-800">${f.ad}</p>
            <p class="text-[10px] text-slate-500">${f.donem}</p>
          </div>
          <span class="text-[10px] font-bold px-2 py-1 rounded bg-${f.renk}-100 text-${f.renk}-700">${f.durum}</span>
        </div>
      `;
    });

    this.elements.floraTimelineContainer.innerHTML = html;
  }
}

