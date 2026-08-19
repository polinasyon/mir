/**
 * Friedrich Rutner & Türkiye Arıcılık Araştırmaları Morfometrik Standartları
 * AI Irk & Ekotip Tanılama Motoru
 */

export const RUTNER_DATABASE = {
  // Uluslararası Irklar
  Carnica: {
    name: 'Karniyol (A. m. carnica)',
    ciMin: 2.30, ciMax: 3.20,
    discoidal: 'Pozitif',
    a4Angle: 30.5, // Ortalama A4 açısı (derece)
    pilosity: 0.30, // Tüy uzunluğu (mm)
    color: '#38bdf8'
  },
  Caucasica: {
    name: 'Kafkas (A. m. caucasica)',
    ciMin: 1.70, ciMax: 2.20,
    discoidal: 'Negatif',
    a4Angle: 35.2,
    pilosity: 0.45,
    color: '#10b981'
  },
  Anatolica: {
    name: 'Anadolu Tipik (A. m. anatolica)',
    ciMin: 2.10, ciMax: 2.60,
    discoidal: 'Pozitif',
    a4Angle: 32.0,
    pilosity: 0.35,
    color: '#f59e0b'
  },
  Mellifera: {
    name: 'Esmer / Batı Avrupa (A. m. mellifera)',
    ciMin: 1.40, ciMax: 1.90,
    discoidal: 'Negatif',
    a4Angle: 38.0,
    pilosity: 0.40,
    color: '#ef4444'
  },
  Ligustica: {
    name: 'İtalyan (A. m. ligustica)',
    ciMin: 2.20, ciMax: 2.80,
    discoidal: 'Pozitif',
    a4Angle: 31.0,
    pilosity: 0.28,
    color: '#eab308'
  },

  // Bilimsel Yerel Ekotipler (Türkiye)
  Mugla: {
    name: 'Muğla Ekotipi (A. m. anatolica)',
    ciMin: 2.15, ciMax: 2.50,
    discoidal: 'Pozitif',
    a4Angle: 32.5,
    pilosity: 0.33,
    color: '#d97706'
  },
  Yigilca: {
    name: 'Yığılca Ekotipi (Batı Karadeniz)',
    ciMin: 2.30, ciMax: 2.75,
    discoidal: 'Pozitif',
    a4Angle: 29.8,
    pilosity: 0.38,
    color: '#84cc16'
  },
  Hatay: {
    name: 'Hatay / Doğu Akdeniz Ekotipi (A. m. syriaca geçiş)',
    ciMin: 1.90, ciMax: 2.35,
    discoidal: 'Nötr',
    a4Angle: 34.0,
    pilosity: 0.25,
    color: '#ec4899'
  },
  Trakya: {
    name: 'Trakya / Gökçeada Popülasyonu',
    ciMin: 2.25, ciMax: 2.70,
    discoidal: 'Pozitif',
    a4Angle: 31.2,
    pilosity: 0.32,
    color: '#a855f7'
  }
};

export class RutnerAIEngine {
  /**
   * Çok Parametreli AI Irk ve Ekotip Tanılama
   * @param {number} ci - Kübital İndeks
   * @param {string} discoidal - Diskoidal Kayma Durumu
   * @param {number} [a4Angle] - A4 Damar Açısı (Opsiyonel)
   * @param {number} [pilosity] - Tüy Uzunluğu (Opsiyonel)
   */
  static analyzeRace(ci, discoidal, a4Angle = null, pilosity = null) {
    const ciNum = parseFloat(ci);
    let bestMatch = null;
    let highestScore = 0;
    let candidates = [];

    Object.keys(RUTNER_DATABASE).forEach((key) => {
      const race = RUTNER_DATABASE[key];
      let score = 0;
      let maxPossibleScore = 100;

      // 1. CI (Kübital İndeks) Matrisi (%50 Ağırlık)
      if (ciNum >= race.ciMin && ciNum <= race.ciMax) {
        score += 50;
      } else {
        const diff = Math.min(Math.abs(ciNum - race.ciMin), Math.abs(ciNum - race.ciMax));
        if (diff <= 0.15) score += 30;
        else if (diff <= 0.30) score += 15;
      }

      // 2. Diskoidal Kayma (%30 Ağırlık)
      if (race.discoidal === 'Nötr' || discoidal.includes(race.discoidal)) {
        score += 30;
      }

      // 3. A4 Açısı Analizi (%10 Ağırlık - Varsayılan Tolerans ±2.5°)
      if (a4Angle !== null) {
        const angleDiff = Math.abs(a4Angle - race.a4Angle);
        if (angleDiff <= 2.5) score += 10;
        else if (angleDiff <= 5.0) score += 5;
      } else {
        score += 5; // Veri verilmediyse nötr puan
      }

      // 4. Kıl Uzunluğu Analizi (%10 Ağırlık)
      if (pilosity !== null) {
        const pilDiff = Math.abs(pilosity - race.pilosity);
        if (pilDiff <= 0.05) score += 10;
        else if (pilDiff <= 0.10) score += 5;
      } else {
        score += 5; // Veri verilmediyse nötr puan
      }

      candidates.push({
        key,
        name: race.name,
        score,
        color: race.color
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = race;
      }
    });

    const isHybrid = highestScore < 65;

    return {
      predictedRace: bestMatch ? bestMatch.name : 'Belirsiz / Genetik Sapma',
      confidence: highestScore,
      isHybrid: isHybrid,
      candidates: candidates.sort((a, b) => b.score - a.score)
    };
  }
}
