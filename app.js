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
    // 1. Menü butonlarını hata ihtimaline karşı garanti altına al
    this.menuBtns.forEach((btn) => {
      const handleNav = (e) => {
        if (e.cancelable) e.preventDefault();
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
      const handleToggle = (e) => {
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();
        this.toggleOverlay();
      };
      this.menuToggle.addEventListener('click', handleToggle);
      this.menuToggle.addEventListener('touchend', handleToggle);
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) {
          this.closeOverlay();
        }
      });
    }

    // 2. Modülleri birbirinden bağımsız ve güvenli şekilde başlat (Biri patlasa bile diğerleri ve menü çalışır)
    try {
      this.modules.pedigree = new PedigreeModule();
      this.modules.pedigree.init();
    } catch (err) {
      console.warn('Pedigree modül yüklenemedi:', err);
    }

    try {
      this.modules.breeding = new BreedingModule();
      this.modules.breeding.init();
    } catch (err) {
      console.warn('Breeding modül yüklenemedi:', err);
    }

    try {
      this.modules.nektar = new NektarModule();
      this.modules.nektar.init();
    } catch (err) {
      console.warn('Nektar modül yüklenemedi:', err);
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

