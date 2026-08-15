// minimal map wrapper using Leaflet via CDN
export async function initMap(containerId){
  // lazy load Leaflet CSS/JS
  await loadCSS('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
  await loadScript('https://unpkg.com/leaflet@1.9.4/dist/leaflet.js');

  const el = document.getElementById(containerId);
  el.innerHTML = '';
  const map = L.map(el).setView([39.92077,32.85411], 8);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '© OpenStreetMap' }).addTo(map);

  const markers = L.layerGroup().addTo(map);
  return {
    map,
    setMarkers(items){
      markers.clearLayers();
      items.forEach(it=>{
        if (!it.lat || !it.lon) return;
        const m = L.marker([it.lat, it.lon]);
        m.bindPopup(`<strong>${escapeHtml(it.species||'')}</strong><div>${escapeHtml(it.region||'')}</div>`);
        markers.addLayer(m);
      });
    },
    panTo(latlon){ if (latlon && latlon[0]) map.panTo(latlon); }
  };
}

function loadScript(src){ return new Promise((res, rej)=>{ const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
function loadCSS(href){ return new Promise((res)=>{ const l = document.createElement('link'); l.rel='stylesheet'; l.href=href; l.onload=res; document.head.appendChild(l); }); }
function escapeHtml(s){ return (''+s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
