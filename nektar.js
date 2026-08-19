/**
 * Polinasyon - Nektar Akım Potansiyeli ve Biyoklimatik Analiz Modülü
 */
export class NectarEngine {
  /**
   * Biyoklimatik Nektar Akım Skorunu Hesaplar
   * @param {Object} data - Anlık hava durumu ve geçmiş veriler
   */
  static calculateNectarScore(data) {
    const { temp, humidity, dewPoint, windSpeed, rain, cloud, avgTemp3Days, gddRatio } = data;

    // 1. Sıcaklık Uçuş ve Salgı Kat Sayısı (10°C - 30°C Optimum)
    let tempScore = 0;
    if (temp >= 15 && temp <= 25) tempScore = 100;
    else if (temp > 25 && temp <= 32) tempScore = 80;
    else if (temp >= 10 && temp < 15) tempScore = 50;
    else tempScore = 10;

    // 2. Nem ve Turgor Basıncı Bonusu (%50 - %75 Optimum)
    let turgorBonus = 0;
    if (humidity >= 55 && humidity <= 75 && (temp - dewPoint) <= 8) {
      turgorBonus = 27; // Görseldeki Optimum Turgor Bonusu (+%27)
    } else if (humidity >= 40 && humidity < 55) {
      turgorBonus = 12;
    }

    // 3. Rüzgar ve Yağış Cezası
    let penalty = 0;
    if (rain > 0) penalty += 50;
    if (windSpeed > 15) penalty += 30;

    // 4. Baz Skor Hesabı
    let rawScore = (tempScore * 0.4) + (turgorBonus * 1.5) + (cloud < 20 ? 15 : 0) - penalty;
    let finalScore = Math.min(Math.max(Math.round(rawScore), 5), 98);

    // Skor Seviyesi Etiketi
    let levelText = 'DÜŞÜK';
    if (finalScore >= 75) levelText = 'GÜÇLÜ';
    else if (finalScore >= 50) levelText = 'ORTA';

    return {
      score: finalScore,
      level: levelText,
      turgorBonus: turgorBonus,
      avg3Days: avgTemp3Days,
      gddCapacity: Math.round(gddRatio * 100),
      gddDiff: Math.round((gddRatio - 1.0) * 100)
    };
  }

  /**
   * Arayüzdeki (DOM) İlgili Kartları Günceller
   * Existing CSS sınıflarına dokunmadan verileri enjekte eder.
   */
  static renderDashboard(weatherData) {
    const result = this.calculateNectarScore(weatherData);

    // Hava Durumu Kartları (Görsel 1)
    const elTemp = document.getElementById('valTemp');
    const elHumidity = document.getElementById('valHumidity');
    const elDew = document.getElementById('valDew');
    const elWind = document.getElementById('valWind');
    const elRain = document.getElementById('valRain');
    const elCloud = document.getElementById('valCloud');

    if (elTemp) elTemp.textContent = `${weatherData.temp}°C`;
    if (elHumidity) elHumidity.textContent = `%${weatherData.humidity}`;
    if (elDew) elDew.textContent = `${weatherData.dewPoint}°C`;
    if (elWind) elWind.textContent = `${weatherData.windSpeed} km/s`;
    if (elRain) elRain.textContent = `${weatherData.rain} mm`;
    if (elCloud) elCloud.textContent = `%${weatherData.cloud}`;

    // Nektar Akım Potansiyeli Kartı (Görsel 2)
    const elScore = document.getElementById('nectarScore');
    const elLevel = document.getElementById('nectarLevel');
    const el3DayTrend = document.getElementById('trend3Day');
    const elGddCap = document.getElementById('gddCapacity');
    const elGddDiff = document.getElementById('gddDiff');
    const elTurgorVal = document.getElementById('turgorBonusVal');
    const elProgressBar = document.getElementById('nectarProgressBar');

    if (elScore) elScore.textContent = `%${result.score}`;
    if (elLevel) elLevel.textContent = result.level;
    if (el3DayTrend) el3DayTrend.textContent = `${result.avg3Days}°C Ortalama`;
    if (elGddCap) elGddCap.textContent = `%${result.gddCapacity}`;
    if (elGddDiff) elGddDiff.textContent = `(GDD ${result.gddDiff > 0 ? '+' : ''}${result.gddDiff}%)`;
    if (elTurgorVal) elTurgorVal.textContent = `+%${result.turgorBonus}`;
    if (elProgressBar) elProgressBar.style.width = `${result.score}%`;
  }
}
