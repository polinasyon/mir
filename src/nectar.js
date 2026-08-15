// Simple nectar score placeholder
let el;
export function initNectar(elTarget){
  el = elTarget;
  el.textContent = '—';
  // demo update
  setInterval(()=> {
    const v = Math.max(0, Math.round(50 + Math.sin(Date.now()/60000)*20 + (Math.random()*10-5)));
    el.textContent = v + ' / 100';
  }, 5000);
}
