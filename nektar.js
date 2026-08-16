// ====================== NEKTAR AKIM MODÜLÜ ======================

// GPS izni verilmezse kullanılacak varsayılan konum (İç Anadolu / Ankara)
const DEFAULT_LAT = 39.93;
const DEFAULT_LON = 32.85;

// Türkiye Bölgesel Flora Takvimi (Aylara Göre Nektar Kaynakları)
const floraCalendar = {
  1: ["Çam (Sınırlı)", "Püren (Son)"],
  2: ["Badem (Erken)", "Kır Çiçekleri"],
  3: ["Kır Çiçekleri", "Badem", "Erik", "Karaağaç"],
  4: ["Elma", "Kiraz", "Kanola", "Karahindiba", "Meyve Bahçeleri"],
  5: ["Akasya", "Yem Yoncası", "Narenciye", "Kestane (Başlangıç)"],
  6: ["Kestane", "Ihlamur", "Geven", "Kekik", "Ayçiçeği (Erken)"],
  7: ["Ayçiçeği", "Kekik", "Lavanta", "Pamuk", "Geven"],
  8: ["Çam (Basra)", "Pamuk", "Püren", "Ayçiçeği (Son)"],
  9: ["Çam (Basra Basra)", "Püren", "Sarmaşık"],
  10: ["Püren", "Sarmaşık", "Kır Çiçekleri"],
  11: ["Püren (Son)"],
  12: ["Kış Dinlenmesi"]
};

// ---------- Nektar Akım Skoru Hesaplama Algoritması ----------
function hesaplaNektarSkoru(temp, humidity, rain, wind) {
  let skor = 100;
  let mesajlar = [];

  // 1. Sıcaklık Analizi (Optimum Nektar Salgısı: 20°C - 30°C)
  if (temp < 12) {
    skor -= 50;
    mesajlar.push("Hava çok soğuk: Arı uçuşu durur, nektar salgılanmaz.");
  } else if (temp >= 12 && temp < 18) {
    skor -= 25;
    mesajlar.push("Sıcaklık düşük: Nektar salgılanması ve tarlacılık kısıtlı.");
  } else if (temp >= 18 && temp <= 30) {
    mesajlar.push("Sıcaklık mükemmel: Çiçeklerde optimum nektar salgısı.");
  } else if (temp > 30 && temp <= 35) {
    skor -= 20;
    mesajlar.push("Yüksek sıcaklık: Nektar kıvamı koyulaşır, salgı azalır.");
  } else {
    skor -= 45;
    mesajlar.push("Aşırı sıcak: Çiçekler kurur, arılar su taşımaya yönelir.");
  }

  // 2. Yağış Analizi
  if (rain > 0) {
    skor -= 60;
    mesajlar.push("Yağış var: Tarlacılık durur, çiçek nektarları yıkanır.");
  }

  // 3. Nem Analizi (Optimum: %50 - %75)
  if (humidity < 40) {
    skor -= 15;
    mesajlar.push("Düşük nem: Çiçek nektarları çabuk kurur.");
  } else if (humidity > 85) {
    skor -= 10;
    mesajlar.push("Yüksek nem: Nektar sulanır, şeker oranı düşer.");
  }

  // 4. Rüzgar Analizi (Optimum: < 15 km/s)
  if (wind > 25) {
    skor -= 35;
    mesajlar.push("Şiddetli rüzgar: Arıların uçuşu ve dönüşü zorlaşır.");
  } else if (wind > 15) {
    skor -= 15;
    mesajlar.push("Orta rüzgar: Tarlacılık performansını hafif düşürür.");
  }

  skor = Math.max(0, Math.min(100, skor));

  let durum = "Zayıf";
  let renk = "#ef4444";
  if (skor >= 80) { durum = "Mükemmel (Güçlü Akım)"; renk = "#10b981"; }
  else if (skor >= 60) { durum = "İyi (Aktif Tarlacılık)"; renk = "#f59e0b"; }
  else if (skor >= 40) { durum = "Orta (Kısıtlı Akım)"; renk = "#3b82f6"; }

  return { skor, durum, renk, mesajlar };
}

// ---------- Open-Meteo API Hava Durumu İsteği ----------
async function fetchWeatherData(lat, lon) {
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,rain,wind_speed_10m`;
  const response = await fetch(url);
  if (!response.ok) throw new Error("Hava verileri alınamadı.");
  return await response.json();
}

// ---------- Modül Başlatıcı (HTML'in Çağırdığı Fonksiyon) ----------
export function initNektarModule() {
  const container = document.getElementById('nektarInfo');
  if (!container) return;

  // Yükleniyor Ekranı
  container.innerHTML = `
    <div style="text-align:center; padding: 30px; color: var(--muted);">
      <div style="display:inline-block; width:28px; height:28px; border:3px solid var(--amber); border-top-color:transparent; border-radius:50%; animation: spin 0.8s linear infinite;"></div>
      <p style="margin-top:12px; font-size:14px;">Konum tespiti yapılıyor ve canlı hava verileri çekiliyor...</p>
    </div>
    <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
  `;

  // Geolocation (Konum Alımı)
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => loadNektarData(pos.coords.latitude, pos.coords.longitude, container),
      () => loadNektarData(DEFAULT_LAT, DEFAULT_LON, container),
      { timeout: 5000 }
    );
  } else {
    loadNektarData(DEFAULT_LAT, DEFAULT_LON, container);
  }
}

// ---------- Verileri İşleme ve Arayüze Basma ----------
async function loadNektarData(lat, lon, container) {
  try {
    const data = await fetchWeatherData(lat, lon);
    const current = data.current;

    const temp = current.temperature_2m;
    const humidity = current.relative_humidity_2m;
    const rain = current.rain;
    const wind = current.wind_speed_10m;

    const analiz = hesaplaNektarSkoru(temp, humidity, rain, wind);

    const currentMonth = new Date().getMonth() + 1;
    const aktifFlora = floraCalendar[currentMonth] || ["Kır Çiçekleri"];

    container.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:16px; margin-top:10px;">
        
        <!-- Skor Kartı -->
        <div style="background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:14px; padding:24px; text-align:center;">
          <div style="font-size:12px; color:var(--muted); text-transform:uppercase; letter-spacing:1px; font-weight:bold;">Anlık Nektar Akım Potansiyeli</div>
          <div style="font-size:52px; font-weight:900; color:${analiz.renk}; margin:10px 0; line-height:1;">%${analiz.skor}</div>
          <div style="display:inline-block; background:${analiz.renk}22; color:${analiz.renk}; border:1px solid ${analiz.renk}55; padding:6px 16px; border-radius:20px; font-size:13px; font-weight:bold;">
            ${analiz.durum}
          </div>
        </div>

        <!-- Hava Durumu Metrik Grubu -->
        <div class="metric-grid">
          <div class="metric-item">
            <div class="metric-label">Sıcaklık</div>
            <div class="metric-value">${temp} °C</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">Bağıl Nem</div>
            <div class="metric-value">%${humidity}</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">Yağış</div>
            <div class="metric-value">${rain} mm</div>
          </div>
          <div class="metric-item">
            <div class="metric-label">Rüzgar Hızı</div>
            <div class="metric-value">${wind} km/s</div>
          </div>
        </div>

        <!-- Saha & Arıcılık Analizi -->
        <div class="section-box">
          <h3 style="font-size:14px; margin-bottom:10px;">Arazideki Durum & Değerlendirme</h3>
          <ul style="margin:0; padding-left:18px; color:#d1d5db; font-size:13px; line-height:1.7;">
            ${analiz.mesajlar.map(m => `<li>${m}</li>`).join('')}
          </ul>
        </div>

        <!-- Dönemsel Flora -->
        <div class="section-box">
          <h3 style="font-size:14px; margin-bottom:10px;">Bu Ayın Aktif Florası</h3>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            ${aktifFlora.map(f => `<span style="background:rgba(245,158,11,0.12); color:var(--amber); border:1px solid rgba(245,158,11,0.3); padding:5px 12px; border-radius:8px; font-size:12px; font-weight:bold;">${f}</span>`).join('')}
          </div>
        </div>

      </div>
    `;
  } catch (err) {
    console.error("Nektar modülü yükleme hatası:", err);
    container.innerHTML = `
      <div style="background:rgba(239,68,68,0.1); border:1px solid #ef4444; border-radius:10px; padding:16px; color:#ef4444; font-size:13px; text-align:center;">
        ⚠️ Canlı nektar verileri çekilemedi. İnternet bağlantınızı veya servis erişimini kontrol edin.
      </div>
    `;
  }
}
