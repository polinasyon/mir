/**
 * Polinasyon - Nektar Akım Potansiyeli Modülü
 */
export class NectarEngine {
  /**
   * Biyoklimatik Nektar Akım Skorunu Hesaplar
   */
  static calculateNectarScore(data) {
    const { temp, humidity, dewPoint, windSpeed, rain, cloud } = data;

    // Sıcaklık, Nem, Çiy Noktası ve Rüzgar Dengesi
    let tempScore = (temp >= 15 && temp <= 25) ? 100 : (temp >= 10 ? 50 : 10);
    let turgorBonus = (humidity >= 55 && humidity <= 75 && (temp - dewPoint) <= 8) ? 27 : 12;
    let penalty = (rain > 0 ? 50 : 0) + (windSpeed > 15 ? 30 : 0);

    let rawScore = (tempScore * 0.4) + (turgorBonus * 1.5) + (cloud < 20 ? 15 : 0) - penalty;
    let finalScore = Math.min(Math.max(Math.round(rawScore), 5), 98);

    return {
      score: finalScore,
      level: finalScore >= 75 ? 'GÜÇLÜ' : (finalScore >= 50 ? 'ORTA' : 'DÜŞÜK')
    };
  }

  /**
   * Buton Üzerindeki Live Etiketi ve İç Panel Verilerini Günceller
   */
  static renderDashboard(weatherData) {
    const result = this.calculateNectarScore(weatherData);

    // 1. Doğrudan verdiğiniz Nektar Menü Butonunu Bul
    const nektarBtn = document.querySelector('button[data-target="nektar"]');

    if (nektarBtn) {
      // Butonun sonundaki "Canlı" yazan span'i bulup skorla değiştir (Örn: %81 Güçlü)
      const liveSpan = nektarBtn.querySelector('span:last-child');
      if (liveSpan) {
        liveSpan.textContent = `%${result.score} (${result.level})`;
        liveSpan.style.color = '#10b981'; // Yeşil canlı vurgu
        liveSpan.style.fontWeight = 'bold';
      }
    }

    // 2. Sayfa İçindeki Genel Nektar/Hava Durumu Elemanları (Varsa Günceller)
    const elScore = document.getElementById('nectarScore');
    if (elScore) elScore.textContent = `%${result.score}`;
  }
}
