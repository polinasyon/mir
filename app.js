import { PedigreeModule } from './pedigree.js';

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
    // Menü Buton Dinleyicileri
    this.menuBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        this.openPanel(target);
      });
    });

    // Menü Aç/Kapat
    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', () => {
        this.toggleOverlay();
      });
    }

    // Overlay'e tıklandığında menüyü/panelleri kapatma
    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.closeOverlay();
        }
      });
    }

    // ESC tuşu desteği
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeAllPanels();
        this.closeOverlay();
      }
    });

    // Alt modülleri güvenli bir şekilde başlat
    this.initModules();
  }

  initModules() {
    try {
      if (this.modules.pedigree && typeof this.modules.pedigree.init === 'function') {
        this.modules.pedigree.init();
      }
    } catch (error) {
      console.error('PedigreeModule başlatılırken hata oluştu:', error);
    }
  }

  openPanel(target) {
    this.closeOverlay();
    this.closeAllPanels();

    if (this.panels[target]) {
      this.panels[target].classList.add('active');

      if (target === 'pedigree' && this.modules.pedigree) {
        this.modules.pedigree.renderTable();
      }
    } else {
      console.warn(`Panel bulunamadı: ${target}`);
    }
  }

  closeAllPanels() {
    Object.values(this.panels).forEach((panel) => {
      if (panel) panel.classList.remove('active');
    });
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
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.init();
});
