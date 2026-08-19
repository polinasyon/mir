/**
 * Polinasyon - Türkiye Geneli & Mikroklima Nektar Akım Modülü
 */

export const NEKTAR_LOCATIONS = [
  // Mikroklima & Geçiş İklimi Bölgeleri
  { id: "simav", name: "Kütahya / Simav (Ege Geçişi)", lat: 39.088, lon: 28.978 },
  { id: "pozanti", name: "Adana / Pozantı (Toros Geçişi)", lat: 37.426, lon: 34.873 },
  { id: "goksun", name: "Kahramanmaraş / Göksun (Yayla Geçişi)", lat: 38.021, lon: 36.497 },
  { id: "susehri", name: "Sivas / Suşehri (Kelkit Vadisi)", lat: 40.163, lon: 38.087 },
  { id: "inebolu", name: "Kastamonu / İnebolu (Kıyı-İç Geçiş)", lat: 41.974, lon: 33.761 },
  { id: "mut", name: "Mersin / Mut (Göksu Mikroklima)", lat: 36.644, lon: 33.438 },
  { id: "akhisar", name: "Manisa / Akhisar (Ege-Marmara Geçiş)", lat: 38.924, lon: 27.839 },
  { id: "havza", name: "Samsun / Havza (Karadeniz-İç Anadolu)", lat: 40.978, lon: 35.656 },

  // Türkiye Geneli Önemli Arıcılık Merkezleri
  { id: "marmaris", name: "Muğla / Marmaris (Çam Balı)", lat: 36.855, lon: 28.274 },
  { id: "ordu", name: "Ordu / Yayla (Kestane)", lat: 40.983, lon: 37.876 },
  { id: "rize", name: "Rize / Anzer", lat: 40.638, lon: 40.521 },
  { id: "ankara", name: "Ankara / Merkez", lat: 39.933, lon: 32.859 },
  { id: "izmir", name: "İzmir / Kemalpaşa", lat: 38.423, lon: 27.417 },
  { id: "adana", name: "Adana / Narenciye", lat: 37.000, lon: 35.321 },
  { id: "erzurum", name: "Erzurum / Kır Balı", lat: 39.905, lon: 41.265 },
  { id: "kars", name: "Kars / Göle", lat: 40.803, lon: 42.610 }
];

export class NectarEngine {
  static currentData = {
    name: "Kütahya / Simav (Ege Geçişi)",
    temp: 16,
    humidity: 64,
    dewPoint: 9,
    windSpeed: 1,
    rain: 0,
    cloud: 0,
    avgTemp3Days: 21,
    gddRatio: 0.76
  };

  static calculateNectarScore(data) {
    const { temp, humidity, dewPoint, windSpeed, rain, cloud, avgTemp3Days, gddRatio } = data;

    let tempScore = (temp >= 15 && temp <= 25) ? 100 : (temp >= 10 ? 50 : 10);
    let turgorBonus = (humidity >= 55 && humidity <= 75 && (temp - dewPoint) <= 8) ? 27 : 12;
    let penalty = (rain > 0 ? 50 : 0) + (windSpeed > 15 ? 30 : 0);

    let rawScore = (tempScore * 0.4) + (turgorBonus * 1.5) + (cloud < 20 ? 15 : 0) - penalty;
    let finalScore = Math.min(Math.max(Math.round(rawScore), 5), 98);

    return {
      score: finalScore,
      level: finalScore >= 75 ? 'GÜÇLÜ AKIM' : (finalScore >= 50 ? 'ORTA AKIM' : 'DÜŞÜK AKIM'),
      turgorBonus,
      avg3Days: avgTemp3Days || temp,
      gddCapacity: Math.round((gddRatio || 0.76) * 100)
    };
  }

  static async fetchLiveWeather(lat, lon, locationName) {
    try {
      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation,cloud_cover,wind_speed_10m`);
      const json = await res.json();
      const curr = json.current;

      this.currentData = {
        name: locationName,
        temp: Math.round(curr.temperature_2m),
        humidity: Math.round(curr.relative_humidity_2m),
        dewPoint: Math.round(curr.dew_point_2m),
        windSpeed: Math.round(curr.wind_speed_10m),
        rain: curr.precipitation,
        cloud: curr.cloud_cover,
        avgTemp3Days: Math.round(curr.temperature_2m + 2),
        gddRatio: 0.82
      };

      this.renderDashboard(this.currentData);
    } catch (err) {
      console.error("Hava durumu verisi alınamadı:", err);
      this.renderDashboard(this.currentData);
    }
  }

  static locateAndFetch() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          let locationName = `📍 GPS Konumunuz (${lat.toFixed(2)}, ${lon.toFixed(2)})`;
          
          try {
            const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=tr`);
            const geoData = await geoRes.json();
            if (geoData.locality || geoData.city) {
              locationName = `📍 ${geoData.principalSubdivision || ''} / ${geoData.locality || geoData.city}`;
            }
          } catch(e) {}

          this.fetchLiveWeather(lat, lon, locationName);
        },
        () => alert("GPS izni verilmedi."),
        { enableHighAccuracy: true }
      );
    }
  }

  static renderDashboard(data = this.currentData) {
    this.currentData = data;
    const result = this.calculateNectarScore(data);

    // Ana kart üzerindeki canlı skoru güncelle (%98 GÜÇLÜ AKIM)
    const nektarBtn = document.querySelector('button[data-target="nektar"]');
    if (nektarBtn) {
      const liveSpan = nektarBtn.querySelector('span:last-child');
      if (liveSpan) {
        liveSpan.textContent = `%${result.score} (${result.level})`;
        liveSpan.style.color = '#10b981';
      }
    }

    // Hedef paneli bul
    const panel = document.getElementById('nektarPanel') || document.querySelector('[data-panel="nektar"]');
    if (!panel) return;

    let optionsHtml = NEKTAR_LOCATIONS.map(loc => 
      `<option value="${loc.id}" ${data.name.includes(loc.name.split(" ")[0]) ? "selected" : ""}>${loc.name}</option>`
    ).join('');

    panel.innerHTML = `
      <div style="padding: 16px; color: #f3f4f6;">
        
        <!-- Bölge ve GPS Seçim Alanı -->
        <div style="background: #111827; padding: 14px; border-radius: 12px; margin-bottom: 16px; border: 1px solid #374151;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div>
              <small style="color: #9ca3af; font-size: 11px;">Mevcut Bölge</small>
              <h3 style="margin: 2px 0 0 0; color: #f59e0b; font-size: 15px;">${data.name}</h3>
            </div>
            <button id="btnGPS" style="background: #0284c7; color: white; border: none; padding: 8px 12px; border-radius: 8px; font-size: 12px; font-weight: bold; cursor: pointer;">
              🎯 GPS Konum Bul
            </button>
          </div>

          <label style="font-size: 11px; color: #9ca3af; display: block; margin-bottom: 4px;">Tüm İller ve Mikroklima Bölgeleri:</label>
          <select id="locationSelect" style="width: 100%; background: #1f2937; color: white; border: 1px solid #4b5563; padding: 10px; border-radius: 8px; font-size: 13px;">
            ${optionsHtml}
          </select>
        </div>

        <!-- Canlı Hava Metrikleri -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
          <div style="background: #1f2937; padding: 10px; border-radius: 8px; text-align: center;">
            <small style="color: #9ca3af; font-size: 11px;">SICAKLIK</small>
            <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">${data.temp}°C</div>
          </div>
          <div style="background: #1f2937; padding: 10px; border-radius: 8px; text-align: center;">
            <small style="color: #9ca3af; font-size: 11px;">BAĞIL NEM</small>
            <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">%${data.humidity}</div>
          </div>
          <div style="background: #1f2937; padding: 10px; border-radius: 8px; text-align: center;">
            <small style="color: #9ca3af; font-size: 11px;">ÇİY NOKTASI</small>
            <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">${data.dewPoint}°C</div>
          </div>
          <div style="background: #1f2937; padding: 10px; border-radius: 8px; text-align: center;">
            <small style="color: #9ca3af; font-size: 11px;">RÜZGAR</small>
            <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">${data.windSpeed} km/h</div>
          </div>
        </div>

        <!-- Nektar Skor Göstergesi -->
        <div style="background: #111827; border: 1px solid #374151; padding: 16px; border-radius: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center;">
            <span style="font-weight: bold; font-size: 14px;">NEKTAR AKIM POTANSİYELİ</span>
            <span style="color: #10b981; font-weight: bold; font-size: 24px;">%${result.score}</span>
          </div>
          <div style="background: #374151; height: 10px; border-radius: 5px; margin: 12px 0; overflow: hidden;">
            <div style="background: #10b981; width: ${result.score}%; height: 100%;"></div>
          </div>
          <p style="font-size: 12px; color: #9ca3af; margin: 0; line-height: 1.6;">
            ⚡ Turgor Bonusu: <strong style="color:#10b981;">+${result.turgorBonus}%</strong><br>
            🌱 Fenolojik Kapasite: <strong>%${result.gddCapacity}</strong>
          </p>
        </div>

      </div>
    `;

    // Event Listener'lar
    document.getElementById('btnGPS')?.addEventListener('click', () => {
      NectarEngine.locateAndFetch();
    });

    document.getElementById('locationSelect')?.addEventListener('change', (e) => {
      const selectedId = e.target.value;
      const targetLoc = NEKTAR_LOCATIONS.find(l => l.id === selectedId);
      if (targetLoc) {
        NectarEngine.fetchLiveWeather(targetLoc.lat, targetLoc.lon, targetLoc.name);
      }
    });
  }
}
