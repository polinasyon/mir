import { PedigreeModule } from './pedigree.js';
import { BreedingModule } from './breeding.js';
import { NektarModule } from './nektar.js';

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
      pedigree: new PedigreeModule(),
      breeding: new BreedingModule(),
      nektar: new NektarModule()
    };
  }

  init() {
    // Menü buton tıklama dinleyicileri
    this.menuBtns.forEach((btn) => {
      const handleNav = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget.dataset.target;
        if (target) {
          this.openPanel(target);
        }
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

    // Modülleri doğrudan ve güvenle başlat
    try {
      this.modules.pedigree.init();
    } catch (err) {
      console.error('Pedigree modül hatası:', err);
    }

    try {
      this.modules.breeding.init();
    } catch (err) {
      console.error('Breeding modül hatası:', err);
    }

    try {
      this.modules.nektar.init();
    } catch (err) {
      console.error('Nektar modül hatası:', err);
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

  openPanel(target) {
    this.closeOverlay();
    this.closeAllPanels();

    if (this.panels[target]) {
      this.panels[target].classList.add('active');

      if (target === 'health') {
        if (this.modules.breeding && typeof this.modules.breeding.renderTable === 'function') {
          this.modules.breeding.renderTable();
        }
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

