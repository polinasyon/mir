import { PedigreeModule } from './pedigree.js';
import { NectarEngine } from './nektar.js';

// Varsayılan / Başlangıç Nektar Akım Parametreleri (Simav)
const currentSimavData = {
  name: "Kütahya / Simav (Ege Geçişi)",
  temp: 16,
  humidity: 64,
  dewPoint: 9,
  windSpeed: 1,
  rain: 0,
  cloud: 0,
  avgTemp3Days: 21,
  gddRatio: 0.76
};

class App {
  constructor() {
    this.overlay = document.getElementById('overlay');
    this.menuToggle = document.getElementById('menuToggle');
    this.menuBtns = document.querySelectorAll('.menu-btn[data-target], [data-target]');
    
    // Uygulama Panelleri
    this.panels = {
      nektar: document.getElementById('nektarPanel'),
      hive: document.getElementById('hivePanel'),
      pedigree: document.getElementById('pedigreePanel'),
      health: document.getElementById('healthPanel'),
      akademi: document.getElementById('akademiPanel')
    };

    // Modüller
    this.modules = {
      pedigree: new PedigreeModule()
    };
  }

  init() {
    // 1. Sayfa ilk yüklendiğinde Ana Kart üzerindeki Canlı Nektar Skorunu Hesapla (%98)
    if (typeof NectarEngine !== 'undefined') {
      NectarEngine.renderDashboard(currentSimavData);
    }

    // 2. Menü & Kart Buton Dinleyicilerini Bağla
    this.menuBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const target = btn.getAttribute('data-target') || btn.dataset.target;
        if (target) {
          this.openPanel(target);
        }
      });
    });

    // 3. Hamburger Menü / Overlay Aç-Kapat Kontrolü
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => {
        if (this.overlay) {
          this.overlay.classList.toggle('hidden');
        }
      });
    }

    // 4. Pedigree Modülü Başlatma
    if (this.modules.pedigree && typeof this.modules.pedigree.init === 'function') {
      this.modules.pedigree.init();
    }
  }

  openPanel(target) {
    // Menü açıksa kapat
    if (this.overlay) {
      this.overlay.classList.add('hidden');
    }

    // Önceki açık panelleri gizle
    this.closeAllPanels();

    // Seçilen paneli bul ve aç
    const targetPanel = this.panels[target] || 
                        document.getElementById(`${target}Panel`) || 
                        document.querySelector(`[data-panel="${target}"]`);

    if (targetPanel) {
      targetPanel.classList.add('active');
      targetPanel.style.display = 'block';

      // --- PANEL ÖZEL İŞLEMLERİ ---

      // A) Nektar Akımı Paneli Açıldıysa
      if (target === 'nektar' && typeof NectarEngine !== 'undefined') {
        NectarEngine.renderDashboard(currentSimavData);
      }

      // B) Pedigree Paneli Açıldıysa
      if (target === 'pedigree' && this.modules.pedigree) {
        if (typeof this.modules.pedigree.renderTable === 'function') {
          this.modules.pedigree.renderTable();
        }
      }
    }
  }

  closeAllPanels() {
    Object.values(this.panels).forEach((panel) => {
      if (panel) {
        panel.classList.remove('active');
        panel.style.display = 'none';
      }
    });

    // Kod ile dinamik yakalanabilecek diğer panelleri de gizle
    document.querySelectorAll('.content-panel').forEach((p) => {
      p.classList.remove('active');
      p.style.display = 'none';
    });
  }
}

// Uygulamayı Başlat
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
