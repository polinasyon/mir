import { PedigreeModule } from './pedigree.js';
import { NectarEngine } from './nektar.js';

// Ekran görüntüsündeki (Simav) canlı parametreler
const currentSimavData = {
  temp: 16,
  humidity: 64,
  dewPoint: 9,
  windSpeed: 1,
  rain: 0,
  cloud: 0,
  avgTemp3Days: 21,
  gddRatio: 0.76 // Referans yıla göre %24 geride (%61 Kapasite)
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Buton (Ana Sayfa) yüklendiğinde Nektar Akım Motorunu çalıştırır
  if (typeof NectarEngine !== 'undefined') {
    NectarEngine.renderDashboard(currentSimavData);
  }
});

class App {
  constructor() {
    this.overlay = document.getElementById('overlay');
    this.menuToggle = document.getElementById('menuToggle');
    this.menuBtns = document.querySelectorAll('.menu-btn[data-target]');
    
    this.panels = {
      nektar: document.getElementById('nektarPanel'),
      hive: document.getElementById('hivePanel'),
      pedigree: document.getElementById('pedigreePanel'),
      health: document.getElementById('healthPanel'),
      akademi: document.getElementById('akademiPanel')
    };

    this.modules = {
      pedigree: new PedigreeModule()
    };
  }

  init() {
    this.menuBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        this.openPanel(target);
      });
    });

    this.menuToggle.addEventListener('click', () => {
      this.overlay.classList.toggle('hidden');
    });

    this.modules.pedigree.init();
  }

  openPanel(target) {
    this.overlay.classList.add('hidden');
    this.closeAllPanels();

    if (this.panels[target]) {
      this.panels[target].classList.add('active');

      if (target === 'pedigree') {
        this.modules.pedigree.renderTable();
      }
    }
  }

  closeAllPanels() {
    Object.values(this.panels).forEach((panel) => {
      if (panel) panel.classList.remove('active');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
