// meteo.js: location + open-meteo + reverse geocode (Nominatim)
const NOMINATIM = 'https://nominatim.openstreetmap.org';
const OPEN_METEO = 'https://api.open-meteo.com/v1/forecast';

export function initMeteo(opts){
  const { locInfoEl, meteoSummaryEl, inputEl, useGeoBtn, setLocBtn, onLocation } = opts;
  const defaultLoc = { lat:39.92077, lon:32.85411, label:'Ankara, Türkiye' };

  async function setLocation(lat, lon, label){
    locInfoEl.textContent = `${label || lat+','+lon} (${lat.toFixed(4)}, ${lon.toFixed(4)})`;
    if (onLocation) onLocation({lat,lon});
    // fetch meteo summary
    try{
      const url = new URL(OPEN_METEO);
      url.searchParams.set('latitude', lat);
      url.searchParams.set('longitude', lon);
      url.searchParams.set('hourly','temperature_2m');
      url.searchParams.set('timezone','auto');
      const r = await fetch(url.toString());
      const data = await r.json();
      const t = data && data.hourly && data.hourly.temperature_2m ? data.hourly.temperature_2m[0] : null;
      meteoSummaryEl.textContent = t ? `Saatlik: ${t}°C` : 'Hava verisi alınamadı';
    }catch(e){ meteoSummaryEl.textContent = 'Hava servisi hatası'; }
  }

  async function reverseGeocode(lat, lon){
    const url = `${NOMINATIM}/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;
    const r = await fetch(url, { headers: { 'Accept-Language':'tr' } });
    if (!r.ok) return null;
    const j = await r.json();
    return j;
  }

  async function useCurrent(){
    if (!navigator.geolocation) return alert('Geolocation desteklenmiyor');
    locInfoEl.textContent = 'Konum alınıyor...';
    navigator.geolocation.getCurrentPosition(async (pos)=>{
      const lat = pos.coords.latitude, lon = pos.coords.longitude;
      const rev = await reverseGeocode(lat, lon);
      const label = rev && rev.address ? (rev.address.city || rev.address.town || rev.address.county || rev.address.state) : '';
      await setLocation(lat, lon, label || 'Güncel konum');
    }, (err)=>{ locInfoEl.textContent = 'Konum hatası: ' + err.message; });
  }

  async function changeByInput(){
    const v = inputEl.value.trim();
    if (!v) return alert('Lütfen şehir veya koordinat girin');
    const parts = v.split(',').map(s=>s.trim());
    if (parts.length===2 && !isNaN(parseFloat(parts[0]))){
      const lat = parseFloat(parts[0]), lon = parseFloat(parts[1]);
      const rev = await reverseGeocode(lat, lon);
      const label = rev && rev.display_name ? rev.display_name : '';
      await setLocation(lat, lon, label);
    } else {
      // search
      try{
        const q = encodeURIComponent(v);
        const url = `${NOMINATIM}/search?q=${q}&format=json&limit=1`;
        const r = await fetch(url);
        const arr = await r.json();
        if (!arr || !arr[0]) return alert('Konum bulunamadı');
        const lat = parseFloat(arr[0].lat), lon = parseFloat(arr[0].lon);
        await setLocation(lat, lon, arr[0].display_name);
      }catch(e){ alert('Geocoding hatası'); }
    }
  }

  // wire up
  useGeoBtn.addEventListener('click', useCurrent);
  setLocBtn.addEventListener('click', changeByInput);

  // initial default: try geolocation, else default
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(async (pos)=>{
      const lat = pos.coords.latitude, lon = pos.coords.longitude;
      const rev = await reverseGeocode(lat, lon);
      const label = rev && rev.address ? (rev.address.city || rev.address.town || rev.address.county || rev.address.state) : '';
      setLocation(lat, lon, label || 'Güncel konum');
    }, ()=> setLocation(defaultLoc.lat, defaultLoc.lon, defaultLoc.label));
  } else {
    setLocation(defaultLoc.lat, defaultLoc.lon, defaultLoc.label);
  }

  return { setLocation };
}
