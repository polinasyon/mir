/**
 * Polinasyon - Nektar Akım Potansiyeli Modülü
 */
export class NectarEngine {
  /**
   * Biyoklimatik Nektar Akım Skorunu Hesaplar
   */
  static calculateNectarScore(data) {
    const { temp, humidity, dewPoint, windSpeed, rain, cloud, avgTemp3Days, gddRatio } = data;

    let tempScore = (temp >= 15 && temp <= 25) ? 100 : (temp >= 10 ? 50 : 10);
    let turgorBonus = (humidity >= 55 && humidity <= 75 && (temp - dewPoint) <= 8) ? 27 : 12;
    let penalty = (rain > 0 ? 50 : 0) + (windSpeed > 15 ? 30 : 0);

    let rawScore = (tempScore * 0.4) + (turgorBonus * 1.5) + (cloud < 20 ? 15 : 0) - penalty;
    let finalScore = Math.min(Math.max(Math.round(rawScore), 5), 98);

    return {
      score: finalScore,
      level: finalScore >= 75 ? 'GÜÇLÜ' : (finalScore >= 50 ? 'ORTA' : 'DÜŞÜK'),
      turgorBonus,
      avg3Days: avgTemp3Days || temp,
      gddCapacity: Math.round((gddRatio || 0.76) * 100),
      gddDiff: Math.round(((gddRatio || 0.76) - 1.0) * 100)
    };
  }

  /**
   * Hem Buton Etiketini Hem De Panel İçeriğini Oluşturur
   */
  static renderDashboard(weatherData) {
    const result = this.calculateNectarScore(weatherData);

    // 1. Buton üzerindeki % canlı metni güncelle
    const nektarBtn = document.querySelector('button[data-target="nektar"]');
    if (nektarBtn) {
      const labelSpan = nektarBtn.querySelector('.accent') || nektarBtn.querySelector('span');
      if (labelSpan) {
        labelSpan.textContent = `%${result.score} (${result.level})`;
        labelSpan.style.color = '#10b981';
        labelSpan.style.fontWeight = 'bold';
      }
    }

    // 2. Nektar Akımı Panelini Bul ve İçeriğini HTML Olarak Doldur
    const nektarPanel = document.getElementById('nektarPanel') || document.querySelector('[data-panel="nektar"]');
    if (nektarPanel) {
      nektarPanel.innerHTML = `
        <div class="panel-container" style="padding: 16px; color: #f3f4f6;">
          <h2 style="color: #f59e0b; font-size: 20px; margin-bottom: 16px;">🍯 Nektar Akım Analizi (Simav)</h2>
          
          <!-- Hava Durumu Izgarası -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
            <div style="background: #1f2937; padding: 12px; border-radius: 8px; text-align: center;">
              <small style="color: #9ca3af;">SICAKLIK</small>
              <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">${weatherData.temp}°C</div>
            </div>
            <div style="background: #1f2937; padding: 12px; border-radius: 8px; text-align: center;">
              <small style="color: #9ca3af;">BAĞIL NEM</small>
              <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">%${weatherData.humidity}</div>
            </div>
            <div style="background: #1f2937; padding: 12px; border-radius: 8px; text-align: center;">
              <small style="color: #9ca3af;">ÇİY NOKTASI</small>
              <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">${weatherData.dewPoint}°C</div>
            </div>
            <div style="background: #1f2937; padding: 12px; border-radius: 8px; text-align: center;">
              <small style="color: #9ca3af;">RÜZGAR</small>
              <div style="font-size: 18px; font-weight: bold; color: #38bdf8;">${weatherData.windSpeed} km/s</div>
            </div>
          </div>

          <!-- Nektar Potansiyeli Kartı -->
          <div style="background: #111827; border: 1px solid #374151; padding: 16px; border-radius: 12px; margin-bottom: 16px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-weight: bold;">NEKTAR AKIM POTANSİYELİ</span>
              <span style="color: #10b981; font-weight: bold; font-size: 22px;">%${result.score}</span>
            </div>
            <div style="background: #374151; height: 10px; border-radius: 5px; margin: 10px 0; overflow: hidden;">
              <div style="background: #10b981; width: ${result.score}%; height: 100%;"></div>
            </div>
            <p style="font-size: 13px; color: #9ca3af; margin: 0;">
              ⚡ Optimum Turgor Bonusu: <strong style="color:#10b981;">+${result.turgorBonus}%</strong><br>
              🌡️ 3 Günlük Trend: <strong>${result.avg3Days}°C Ortalama</strong><br>
              🌱 Bitki Fenolojisi: <strong>%${result.gddCapacity} Kapasite (GDD ${result.gddDiff}%)</strong>
            </p>
          </div>
        </div>
      `;
    }
  }
}
