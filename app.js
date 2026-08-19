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
      pedigree: null,
      breeding: null,
      nektar: null
    };
  }

  init() {
    // 1. ÖNCE MENÜ BUTONLARINI GARANTİYE AL (Asla kilitlenemez)
    this.menuBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const target = e.currentTarget.dataset.target;
        if (target) {
          this.openPanel(target);
        }
      });
    });

    if (this.menuToggle) {
      this.menuToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.toggleOverlay();
      });
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.closeOverlay();
        }
      });
    }

    // 2. MODÜLLERİ ARKA PLANDA ASENKRON BAŞLAT (Butonları asla bloke etmez)
    setTimeout(() => {
      try {
        this.modules.pedigree = new PedigreeModule();
        this.modules.pedigree.init();
      } catch (err) {
        console.warn('Pedigree modül hatası:', err);
      }

      try {
        this.modules.breeding = new BreedingModule();
        this.modules.breeding.init();
      } catch (err) {
        console.warn('Breeding modül hatası:', err);
      }

      try {
        this.modules.nektar = new NektarModule();
        this.modules.nektar.init();
      } catch (err) {
        console.warn('Nektar modül hatası:', err);
      }
    }, 50);
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

      if (target === 'health' && this.modules.breeding) {
        if (typeof this.modules.breeding.renderTable === 'function') {
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

