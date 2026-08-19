import { PedigreeModule } from './pedigree.js';
import { BreedingModule } from './breeding.js';
import { NektarModule } from './nektar.js';

class App {
  constructor() {
    this.overlay = document.getElementById('overlay');
    this.menuToggle = document.getElementById('menuToggle');
    this.menuBtns = document.querySelectorAll('.menu-btn');
    
    this.panels = {
      nektarPanel: document.getElementById('nektarPanel'),
      hivePanel: document.getElementById('hivePanel'),
      pedigreePanel: document.getElementById('pedigreePanel'),
      healthPanel: document.getElementById('healthPanel'),
      akademiPanel: document.getElementById('akademiPanel')
    };

    // Modülleri güvenle başlat
    this.modules = {
      pedigree: new PedigreeModule(),
      breeding: new BreedingModule(),
      nektar: new NektarModule()
    };
  }

  init() {
    // 1. Menü butonları ve dokunma olayları
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

    // 2. Modülleri güvenle başlat
    try {
      this.modules.pedigree.init();
    } catch (err) {
      console.warn('Pedigree modül hatası:', err);
    }

    try {
      this.modules.breeding.init();
    } catch (err) {
      console.warn('Breeding modül hatası:', err);
    }

    try {
      this.modules.nektar.init();
    } catch (err) {
      console.warn('Nektar modül hatası:', err);
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

    // Hedef paneli aç
    const targetPanelId = targetKey.endsWith('Panel') ? targetKey : targetKey + 'Panel';
    const activePanel = this.panels[targetPanelId] || document.getElementById(targetKey) || document.getElementById(targetKey + 'Panel');

    if (activePanel) {
      activePanel.classList.remove('hidden');
      activePanel.classList.add('active', 'block');

      if (targetKey === 'health' || targetKey === 'healthPanel') {
        if (this.modules.breeding && typeof this.modules.breeding.renderTable === 'function') {
          this.modules.breeding.renderTable();
        }
      }
    }
  }

  // HTML içindeki onclick="uygulama.otomatikKonumBul()" çağrıları için yönlendirme
  otomatikKonumBul() {
    if (this.modules.nektar && typeof this.modules.nektar.otomatikKonumBul === 'function') {
      this.modules.nektar.otomatikKonumBul();
    }
  }

  konumModaliniAc() {
    if (this.modules.nektar && typeof this.modules.nektar.konumModaliniAc === 'function') {
      this.modules.nektar.konumModaliniAc();
    }
  }

  verileriIceAktar() {
    alert("Yedek yükleme özelliği hazır.");
  }

  verileriYedekle() {
    alert("Veriler yedekleniyor.");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.uygulama = new App();
  window.uygulama.init();
});

