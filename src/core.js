export function initCore(statusEl){
  statusEl.textContent = 'Çekirdek başlatıldı — modüller yükleniyor...';
  setTimeout(()=> statusEl.textContent = 'Çekirdek: Hazır', 800);
}
