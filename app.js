import { PedigreeModule } from './pedigree.js';
import { NectarEngine } from './nektar.js';

const currentSimavData = {
  temp: 16,
  humidity: 64,
  dewPoint: 9,
  windSpeed: 1,
  rain: 0,
  cloud: 0,
  avgTemp3Days: 21,
  gddRatio: 0.76
};

document.addEventListener('DOMContentLoaded', () => {
  // Nektar Akım Motorunu Başlat ve Buton Etiketine Yansıt
  NectarEngine.renderDashboard(currentSimavData);

  // Nektar Butonuna Tıklanınca Yeniden Tetikle
  const nektarBtn = document.querySelector('button[data-target="nektar"]');
  if (nektarBtn) {
    nektarBtn.addEventListener('click', () => {
      NectarEngine.renderDashboard(currentSimavData);
    });
  }

  // Pedigree Modülünü Başlat
  const pedigree = new PedigreeModule();
  pedigree.init();
});
