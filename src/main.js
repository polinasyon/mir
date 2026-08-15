import { initCore } from './core.js';
import { initMeteo } from './meteo.js';
import { initNectar } from './nectar.js';
import { initFlora } from './flora-db.js';
import { initMap } from './map.js';
import { initRegionDB } from './region-db.js';

async function boot(){
  initCore(document.getElementById('coreStatus'));
  const map = await initMap('map');
  const flora = initFlora({ onChange: (items)=> map.setMarkers(items) });
  initNectar(document.getElementById('nectarMeter'));
  initMeteo({
    locInfoEl: document.getElementById('locationInfo'),
    meteoSummaryEl: document.getElementById('meteoSummary'),
    inputEl: document.getElementById('locInput'),
    useGeoBtn: document.getElementById('useGeo'),
    setLocBtn: document.getElementById('setLoc'),
    onLocation: (loc) => {
      // notify other modules
      map.panTo([loc.lat, loc.lon]);
    }
  });

  // region DB (backup/restore)
  const regionDb = initRegionDB(flora);
  const btnBackup = document.getElementById('btnBackup');
  const backupFormat = document.getElementById('backupFormat');
  const backupFile = document.getElementById('backupFile');
  const btnRestore = document.getElementById('btnRestore');

  btnBackup.addEventListener('click', ()=>{
    const fmt = (backupFormat && backupFormat.value) || 'json';
    regionDb.exportBackup(fmt);
  });
  btnRestore.addEventListener('click', async ()=>{
    const f = backupFile.files && backupFile.files[0];
    if (!f) return alert('Lütfen yedek dosyası seçin');
    await regionDb.importBackupFile(f);
  });

  // menu overlay behaviour (kept here)
  const overlay = document.getElementById('overlay');
  const menuBtns = Array.from(document.querySelectorAll('.menu-btn'));
  const menuToggle = document.getElementById('menuToggle');

  menuBtns.forEach((btn) => {
    btn.addEventListener('click', async () => {
      const target = btn.dataset.target;
      menuBtns.forEach((b,i)=> setTimeout(()=> b.classList.add('pressed'), i*50));
      await new Promise(r=> setTimeout(r, 420));
      overlay.classList.add('hidden');
      setTimeout(()=> menuBtns.forEach(b=> b.classList.remove('pressed')), 60);
      if (target){
        const el = document.getElementById(target);
        if (el) el.scrollIntoView({behavior:'smooth'});
      }
    });
  });

  menuToggle.addEventListener('click', ()=>{
    if (overlay.classList.contains('hidden')) {
      overlay.classList.remove('hidden');
      void overlay.offsetWidth;
      menuBtns.forEach(b=> b.classList.remove('pressed'));
    } else {
      menuBtns.forEach((b,i)=> setTimeout(()=> b.classList.add('pressed'), i*30));
      setTimeout(()=> overlay.classList.add('hidden'), 360);
      setTimeout(()=> menuBtns.forEach(b=> b.classList.remove('pressed')), 420);
    }
  });

  // register service worker (leave as-is; user said keep it)
  if ('serviceWorker' in navigator) {
    try{
      await navigator.serviceWorker.register('/sw.js');
      console.log('SW registered');
    }catch(e){ console.warn('SW register failed', e); }
  }
}

boot();
