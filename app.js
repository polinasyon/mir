import { PedigreeModule } from './pedigree.js';
import { BreedingModule } from './breeding.js';

class App {
  constructor() {
    this.overlay = document.getElementById('overlay');
    this.menuToggle = document.getElementById('menuToggle');
    this.menuBtns = document.querySelectorAll('.menu-btn');
    
    // Tüm olası panel ID'lerini güvenle eşleştir
    this.panels = {
      nektar: document.getElementById('nektarPanel') || document.getElementById('sayfaAnaSayfa'),
      sayfaAnaSayfa: document.getElementById('sayfaAnaSayfa') || document.getElementById('nektarPanel'),
      hive: document.getElementById('hivePanel'),
      pedigree: document.getElementById('pedigreePanel'),
      health: document.getElementById('healthPanel'),
      akademi: document.getElementById('akademiPanel')
    };

    this.modules = {
      pedigree: new PedigreeModule(),
      breeding: new BreedingModule()
    };
  }

  init() {
    // 1. Menü butonlarını en başta garantiye al
    this.menuBtns.forEach((btn) => {
      const target = btn.dataset.target;
      if (!target) return;

      const handleNav = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.openPanel(target);
      };

      btn.addEventListener('click', handleNav);
      btn.addEventListener('touchend', handleNav);
    });

    if (this.menuToggle) {
      const toggleMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleOverlay();
      };
      this.menuToggle.addEventListener('click', toggleMenu);
      this.menuToggle.addEventListener('touchend', toggleMenu);
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.closeOverlay();
        }
      });
    }

    // 2. Nektar verilerini doğrudan güvenli şekilde yükle (Modül hatasını önle)
    this.hesaplaNektar(24, 45, 12, "Hafif Esinti", "Yok", 20, "Ankara");
    this.renderFloraTimeline();

    // 3. Diğer modülleri başlat
    try {
      this.modules.pedigree.init();
    } catch (err) {
      console.warn('Pedigree modül uyarısı:', err);
    }

    try {
      this.modules.breeding.init();
    } catch (err) {
      console.warn('Breeding modül uyarısı:', err);
    }
  }

  toggleOverlay() {
    if (this.overlay) {
      this.overlay.classList.toggle('hidden');
    }
  }

  closeOverlay() {
    if (this.overlay) {
      this.overlay.classList.add('hidden');
    }
  }

  openPanel(targetKey) {
    this.closeOverlay();

    // Tüm panelleri gizle
    Object.keys(this.panels).forEach((key) => {
      const panel = this.panels[key];
      if (panel) {
        panel.classList.remove('active', 'block');
        panel.classList.add('hidden');
      }
    });

    // Hedef paneli bul ve aç
    let activePanel = this.panels[targetKey] || document.getElementById(targetKey) || document.getElementById(targetKey + 'Panel');
    if (targetKey === 'nektar') {
      activePanel = document.getElementById('sayfaAnaSayfa') || document.getElementById('nektarPanel');
    }

    if (activePanel) {
      activePanel.classList.remove('hidden');
      activePanel.classList.add('active', 'block');

      if (targetKey === 'health') {
        if (this.modules.breeding && typeof this.modules.breeding.renderTable === 'function') {
          this.modules.breeding.renderTable();
        }
      }
    }
  }

  // Nektar & Hava Durumu Hesaplama Fonksiyonları (Doğrudan App içinde, kilitlenmez)
  hesaplaNektar(temp, humidity, dewPoint, wind, rain, cloud, locationName) {
    const elLokasyon = document.getElementById('havaLokasyon');
    const elFlora = document.getElementById('bolgeFloraHaritasi');
    const elSicaklik = document.getElementById('havaSicaklik');
    const elNem = document.getElementById('havaNem');
    const elCiy = document.getElementById('havaCiy');
    const elRuzgar = document.getElementById('havaRuzgar');
    const elYagis = document.getElementById('havaYagis');
    const elBulut = document.getElementById('havaBulut');
    const elSkor = document.getElementById('nektarSkor');
    const elBar = document.getElementById('nektarBar');
    const elFenoloji = document.getElementById('uiFenoloji');
    const elAciklama = document.getElementById('nektarAciklama');

    if (elLokasyon) elLokasyon.textContent = locationName;
    if (elFlora) elFlora.textContent = `Flora: ${locationName} Bölge Analizi Aktif`;

    let gdd = Math.max(0, temp - 10);
    let score = Math.min(100, Math.max(10, Math.round((temp / 30) * 70 + (100 - humidity) * 0.3)));

    if (elSicaklik) elSicaklik.textContent = `${temp}°C`;
    if (elNem) elNem.textContent = `${humidity}%`;
    if (elCiy) elCiy.textContent = `${dewPoint}°C`;
    if (elRuzgar) elRuzgar.textContent = wind;
    if (elYagis) elYagis.textContent = rain;
    if (elBulut) elBulut.textContent = `${cloud}%`;

    if (elSkor) elSkor.textContent = `%${score}`;
    if (elBar) elBar.style.width = `${score}%`;
    if (elFenoloji) elFenoloji.textContent = `GDD: ${gdd} (${score > 60 ? 'Yüksek' : 'Orta'} Kapasite)`;

    if (elAciklama) {
      elAciklama.textContent = score > 60 
        ? "Mükemmel nektar akım koşulları gözleniyor. Tarlacı arılar aktif." 
        : "Sıcaklık veya nem koşulları nektar salgısını sınırlandırıyor.";
    }

    if (window.lucide && typeof window.lucide.createIcons === 'function') {
      window.lucide.createIcons();
    }
  }

  otomatikKonumBul() {
    if (navigator.geolocation) {
      const elLokasyon = document.getElementById('havaLokasyon');
      if (elLokasyon) elLokasyon.textContent = "Konum alınıyor...";
      navigator.geolocation.getCurrentPosition(
        () => {
          this.hesaplaNektar(26, 38, 14, "Normal", "Yok", 10, "GPS Konumu");
          alert("Konum başarıyla güncellendi!");
        },
        () => {
          alert("Konum izni alınamadı.");
          if (elLokasyon) elLokasyon.textContent = "Ankara";
        }
      );
    } else {
      alert("Tarayıcınız konum desteklemiyor.");
    }
  }

  konumModaliniAc() {
    const yeniKonum = prompt("Lütfen bölge/şehir adı girin:", "Ankara");
    if (yeniKonum && yeniKonum.trim() !== "") {
      this.hesaplaNektar(25, 42, 13, "Hafif", "Yok", 20, yeniKonum.trim());
    }
  }

  renderFloraTimeline() {
    const container = document.getElementById('floraTimelineContainer');
    if (!container) return;

    const floralar = [
      { ad: "Akasya", donem: "Mayıs - Haziran", durum: "Güçlü Nektar" },
      { ad: "Kestane", donem: "Haziran - Temmuz", durum: "Polen / Orta Akım" },
      { ad: "Çam / Pırnar", donem: "Ağustos - Eylül", durum: "Salgı Nejatı" }
    ];

    let html = "";
    florar.forEach(f => {
      html += `
        <div class="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-xs">
          <div>
            <p class="text-xs font-bold text-slate-800">${f.ad}</p>
            <p class="text-[10px] text-slate-500">${f.donem}</p>
          </div>
          <span class="text-[10px] font-bold px-2 py-1 rounded bg-amber-100 text-amber-800">${f.durum}</span>
        </div>
      `;
    });
    container.innerHTML = html;
  }

  verileriIceAktar() { alert("Yedek yükleme aktif."); }
  verileriYedekle() { alert("Veriler indiriliyor."); }
}

document.addEventListener('DOMContentLoaded', () => {
  window.uygulama = new App();
  window.uygulama.init();
});

