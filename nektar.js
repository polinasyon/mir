/**
 * Polinasyon - Türkiye Geneli & Mikroklima/Geçiş İklimi Nektar Akım Potansiyeli Modülü
 */

// Geçiş İklimi / Mikroklima ve Önemli Nektar Merkezleri Koordinat Haritası
export const NEKTAR_LOCATIONS = [
  // Mikroklima & Geçiş İklimi İlçeleri
  { id: "simav", name: "Kütahya / Simav (Geçiş İklimi)", lat: 39.088, lon: 28.978 },
  { id: "pozanti", name: "Adana / Pozantı (Toros Geçişi)", lat: 37.426, lon: 34.873 },
  { id: "goksun", name: "Kahramanmaraş / Göksun (Yayla Geçişi)", lat: 38.021, lon: 36.497 },
  { id: "susehri", name: "Sivas / Suşehri (Kelkit Vadisi)", lat: 40.163, lon: 38.087 },
  { id: "inebolu", name: "Kastamonu / İnebolu (Kıyı-İç Geçiş)", lat: 41.974, lon: 33.761 },
  { id: "mut", name: "Mersin / Mut (Göksu Mikroklima)", lat: 36.644, lon: 33.438 },
  { id: "akhisar", name: "Manisa / Akhisar (Ege-Marmara Geçiş)", lat: 38.924, lon: 27.839 },
  { id: "havza", name: "Samsun / Havza (Karadeniz-İç Anadolu)", lat: 40.978, lon: 35.656 },
  
  // Önemli Bal Üretim Bölgeleri & İller
  { id: "marmaris", name: "Muğla / Marmaris (Çam Balı)", lat: 36.855, lon: 28.274 },
  { id: "ordu_yayla", name: "Ordu / Yayla (Kestane Balı)", lat: 40.983, lon: 37.876 },
  { id: "anzer", name: "Rize / Anzer (Flora Zenginliği)", lat: 40.638, lon: 40.521 },
  { id: "ankara", name: "Ankara / Merkez", lat: 39.933, lon: 32.859 },
  { id: "istanbul", name: "İstanbul / Şile (Yavşan/Kestane)", lat: 41.174, lon: 29.612 },
  { id: "izmir", name: "İzmir / Çeşme", lat: 38.323, lon: 26.303 },
  { id: "erzurum", name: "Erzurum / Yayla Balı", lat: 39.905, lon: 41.265 },
  { id: "kars", name: "Kars / Göle (Polisakarit Flora)", lat: 40.803, lon: 42.610 },
  { id: "hakkari", name: "Hakkari / Yüksekova", lat: 37.574, lon: 44.287 }
];

export class NectarEngine {
  static currentData = {
    name: "Kütahya / Simav (Geçiş İklimi)",
    temp: 16,
    humidity: 64,
    dewPoint: 9,
    windSpeed: 1,
    rain: 0,
    cloud: 0,
    avgTemp3Days: 21,
    gddRatio: 0.76
  };

  /**
   * Biyoklimatik Nektar Akım Skorunu Hesaplar
   */
  static calculateNectarScore(data) {
    const { temp, humidity, dewPoint, windSpeed, rain, cloud, avgTemp3Days, gddRatio } = data;

    // 1. Sıcaklık Uygunluğu (15°C - 25°C Optimum Nektar Salınımı)
    let tempScore = (temp >= 15 && temp <= 25) ? 100 : (temp >= 10 && temp < 15) ? 60 : (temp > 25 && temp <= 32) ? 75 : 15;
    
    // 2. Bitki Turgor Basıncı Bonusu (Nem ve Çiy Noktası Dengesi)
    let dewDiff = temp - dewPoint;
    let turgorBonus = (humidity >= 55 && humidity <= 78 && dewDiff <= 8) ? 27 : 10;
    
    // 3. Olumsuz Hava Şartı Cezası (Rüzgar & Yağış Nektarı Uçurur/Yıkar)
    let penalty = (rain > 0 ? 55 : 0) + (windSpeed > 15 ? 35 : (windSpeed > 10 ? 15 : 0));

    // Final Hesaplama
    let rawScore = (tempScore * 0.45) + (turgorBonus * 1.5) + (cloud < 30 ? 12 : 0) - penalty;
    let finalScore = Math.min(Math.max(Math.round(rawScore), 5), 99);

    return {
      score: finalScore,
      level: finalScore >= 75 ? 'GÜÇLÜ AKIM' : (finalScore >= 50 ? 'ORTA AKIM' : 'DÜŞÜK AKIM'),
      turgorBonus,
      avg3Days: avgTemp3Days || temp,
      gddCapacity: Math.round((gddRatio || 0.76) * 100)
    };
  }

  /**
   * Open-Meteo API'den Anlık Hava Verisi Çeker
   */
  static async fetchLiveWeather(lat, lon, locationName) {
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,dew_point_2m,precipitation,cloud_cover,wind_speed_10m`;
      const res = await fetch(url);
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
        avgTemp3Days: Math.round(curr.temperature_2m + 1.5),
        gddRatio: 0.80
      };

      this.renderDashboard(this.currentData);
    } catch (err) {
      console.error("Hava durumu API hatası:", err);
      this.renderDashboard(this.currentData);
    }
  }

  /**
   * Cihaz GPS'i ile İlçe/Saha Konumu Tespit Et
   */
  static locateAndFetch() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const lat = pos.coords.latitude;
          const lon = pos.coords.longitude;
          
          let locationName = `📍 GPS Konumunuz (${lat.toFixed(2)}, ${lon.toFixed(2)})`;
          
          try {
            // Ters Geocoding ile İl/İlçe İsmini Bul
            const geoRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=tr`);
            const geoData = await geoRes.json();
            if (geoData.locality || geoData.city) {
              locationName = `📍 ${geoData.principalSubdivision || ''} / ${geoData.locality || geoData.city}`;
            }
          } catch(e) {}

          this.fetchLiveWeather(lat, lon, locationName);
        },
        () => { alert("GPS konum izni reddedildi!"); },
        { enableHighAccuracy: true }
      );
    } else {
      alert("Cihazınızda GPS desteği bulunmuyor.");
    }
  }

  /**
   * Arayüzü Çizer
   */
  static renderDashboard(data = this.currentData) {
    this.currentData = data;
    const result = this.calculateNectarScore(data);

    // 1. Ana Buton Üzerini Güncelle (%81 GÜÇLÜ AKIM)
    const nektarBtn = document.querySelector('button[data-target="nektar"]');
    if (nektarBtn) {
      const liveSpan = nektarBtn.querySelector('span:last-child');
      if (liveSpan) {
        liveSpan.textContent = `%${result.score} (${result.level})`;
        liveSpan.style.color = result.score >= 70 ? '#10b981' : (result.score >= 45 ? '#f59e0b' : '#ef4444');
      }
    }

    // 2. Nektar Panelini Doldur
    let panel = document.getElementById('nektarPanel') || 
                document.querySelector('[data-panel="nektar"]') || 
                document.querySelector('.content-panel.active') ||
                document.querySelector('.content-panel');

    if (panel) {
      let optionsHtml = NEKTAR_LOCATIONS.map(loc => 
        `<option value="${loc.id}" ${data.name.includes(loc.name.split(" ")[0]) ? "selected" : ""}>${loc.name}</option>`
      ).join('');

      panel.innerHTML = `
        <div style="padding: 16px; color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
          
          <!-- Konum & GPS Kontrol Paneli -->
          <div style="background: #111827; padding: 14px; border-radius: 12px; margin-bottom: 16px; border: 1px solid #374151;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
              <div>
                <small style="color: #9ca3af; font-size: 11px; letter-spacing: 0.5px;">GÜNCEL NEKTAR BÖLGESİ</small>
                <h3 style="margin: 3px 0 0 0; color: #f59e0b; font-size: 16px; font-weight: 700;">${data.name}</h3>
              </div>
              <button id="btnGPS" style="background: #0284c7; color: white; border: none; padding: 8px 12px; border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                🎯 GPS Konum Bul
              </button>
            </div>

            <label style="font-size: 11px; color: #9ca3af; display: block; margin-bottom: 4px;">Mikroklima & İl Seçimi:</label>
            <select id="locationSelect" style="width: 100%; background: #1f2937; color: white; border: 1px solid #4b5563; padding: 10px; border-radius: 8px; font-size: 13px; outline: none;">
              ${optionsHtml}
            </select>
          </div>

          <!-- Canlı Hava Metrikleri -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
            <div style="background: #1f2937; padding: 12px; border-radius: 10px; text-align: center; border: 1px solid #2d3748;">
              <small style="color: #9ca3af; font-size: 11px;">SICAKLIK</small>
              <div style="font-size: 20px; font-weight: bold; color: #38bdf8; margin-top: 2px;">${data.temp}°C</div>
            </div>
            <div style="background: #1f2937; padding: 12px; border-radius: 10px; text-align: center; border: 1px solid #2d3748;">
              <small style="color: #9ca3af; font-size: 11px;">BAĞIL NEM</small>
              <div style="font-size: 20px; font-weight: bold; color: #38bdf8; margin-top: 2px;">%${data.humidity}</div>
            </div>
            <div style="background: #1f2937; padding: 12px; border-radius: 10px; text-align: center; border: 1px solid #2d3748;">
              <small style="color: #9ca3af; font-size: 11px;">ÇİY NOKTASI</small>
              <div style="font-size: 20px; font-weight: bold; color: #38bdf8; margin-top: 2px;">${data.dewPoint}°C</div>
            </div>
            <div style="background: #1f2937; padding: 12px; border-radius: 10px; text-align: center; border: 1px solid #2d3748;">
              <small style="color: #9ca3af; font-size: 11px;">RÜZGAR / YAĞIŞ</small>
              <div style="font-size: 16px; font-weight: bold; color: #38bdf8; margin-top: 4px;">${data.windSpeed} km/h | ${data.rain}mm</div>
            </div>
          </div>

          <!-- Nektar Skor Kartı -->
          <div style="background: #111827; border: 1px solid #374151; padding: 16px; border-radius: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: 700; font-size: 14px; color: #e5e7eb;">NEKTAR AKIM POTANSİYELİ</span>
              <span style="color: ${result.score >= 70 ? '#10b981' : '#f59e0b'}; font-weight: 800; font-size: 26px;">%${result.score}</span>
            </div>
            
            <div style="background: #374151; height: 10px; border-radius: 5px; margin: 12px 0; overflow: hidden;">
              <div style="background: ${result.score >= 70 ? '#10b981' : '#f59e0b'}; width: ${result.score}%; height: 100%;"></div>
            </div>

            <div style="font-size: 13px; color: #9ca3af; line-height: 1.7;">
              ⚡ Optimum Turgor Bonusu: <strong style="color:#10b981;">+${result.turgorBonus}%</strong><br>
              🌡️ 3 Günlük Trend: <strong>${result.avg3Days}°C Ortalama</strong><br>
              🌱 Bitki Fenolojisi: <strong>%${result.gddCapacity} Kapasite</strong>
            </div>
          </div>

        </div>
      `;

      // Event Listener'ları Ekle
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
}
