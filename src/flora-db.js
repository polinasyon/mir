// flora-db: simple CSV loader and localStorage
const STORAGE_KEY = 'polinasyon_flora_v1';
let items = [];
let callbacks = [];

function parseCSV(text){
  const lines = text.split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
  if (lines.length===0) return [];
  const header = lines.shift().split(',').map(h=>h.trim());
  return lines.map(line=>{
    const cols = line.split(',').map(c=>c.trim());
    const obj = {};
    header.forEach((h,i)=> obj[h]=cols[i]||'');
    return obj;
  });
}

function save(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); }
function load(){ try{ items = JSON.parse(localStorage.getItem(STORAGE_KEY)||'[]'); }catch(e){ items=[]; } }

export function initFlora({ onChange } = {}){
  load();
  if (onChange) onChange(items.slice());
  callbacks.push(onChange);

  const input = document.getElementById('floraCsv');
  const countEl = document.getElementById('floraCount');
  if (countEl) countEl.textContent = 'Kayıt: ' + items.length;

  input.addEventListener('change', (e)=>{
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = ()=>{
      const parsed = parseCSV(reader.result);
      items = items.concat(parsed.map((p, i)=>({ id: Date.now() + '-' + i, species: p.species||p.name||'', lat: parseFloat(p.lat||p.latitude||0), lon: parseFloat(p.lon||p.longitude||0), region: p.region||'', notes: p.notes||'' })));
      save();
      if (countEl) countEl.textContent = 'Kayıt: ' + items.length;
      callbacks.forEach(cb=> cb && cb(items.slice()));
    };
    reader.readAsText(f);
  });

  return {
    list: ()=> items.slice(),
    add: (it)=>{ items.push(it); save(); callbacks.forEach(cb=> cb && cb(items.slice())); },
    replaceAll: (arr)=>{ items = arr.map((p,i)=> ({ id: p.id||(Date.now()+'-'+i), species:p.species||'', lat: parseFloat(p.lat||0), lon: parseFloat(p.lon||0), region:p.region||'', notes:p.notes||'' })); save(); callbacks.forEach(cb=> cb && cb(items.slice())); },
    clear: ()=>{ items=[]; save(); callbacks.forEach(cb=> cb && cb(items.slice())); }
  };
}
