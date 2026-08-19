/**
 * Friedrich Rutner Morfometrik Standartları & AI Irk Tanılama Motoru
 */

// Rutner Irk Veri Tabanı (Referans Aralıkları)
export const RUTNER_DATABASE = {
  Carnica: {
    name: 'Karniyol (A. m. carnica)',
    ciMin: 2.3, ciMax: 3.2,
    discoidal: 'Pozitif',
    color: '#38bdf8'
  },
  Caucasica: {
    name: 'Kafkas (A. m. caucasica)',
    ciMin: 1.7, ciMax: 2.2,
    discoidal: 'Negatif',
    color: '#10b981'
  },
  Anatolica: {
    name: 'Anadolu (A. m. anatolica)',
    ciMin: 2.1, ciMax: 2.6,
    discoidal: 'Nötr / Pozitif',
    color: '#f59e0b'
  },
  Mellifera: {
    name: 'Esmer / Batı Avrupa (A. m. mellifera)',
    ciMin: 1.4, ciMax: 1.9,
    discoidal: 'Negatif',
    color: '#ef4444'
  },
  Ligustica: {
    name: 'İtalyan (A. m. ligustica)',
    ciMin: 2.2, ciMax: 2.8,
    discoidal: 'Pozitif',
    color: '#eab308'
  }
};

export class RutnerAIEngine {
  /**
   * Kübital İndeks ve Diskoidal Kaymaya göre AI Tabanlı Irk Doğrulama & Eşleşme
   * @param {number} ci - Kübital İndeks
   * @param {string} discoidal - Diskoidal Kayma Durumu
   */
  static analyzeRace(ci, discoidal) {
    const ciNum = parseFloat(ci);
    let bestMatch = null;
    let highestScore = 0;
    let candidates = [];

    // Yapay Zekâ Olasılık Hesaplayıcı
    Object.keys(RUTNER_DATABASE).forEach((key) => {
      const race = RUTNER_DATABASE[key];
      let score = 0;

      // 1. CI Aralık Analizi
      if (ciNum >= race.ciMin && ciNum <= race.ciMax) {
        score += 60; // Tam aralık içi
      } else {
        const diff = Math.min(Math.abs(ciNum - race.ciMin), Math.abs(ciNum - race.ciMax));
        if (diff < 0.2) score += 30; // Yakın tolerans
      }

      // 2. Diskoidal Kayma Uyum Analizi
      if (race.discoidal.includes(discoidal.split(' ')[0])) {
        score += 40;
      }

      candidates.push({ key, name: race.name, score, color: race.color });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = race;
      }
    });

    // Hibrit / Melez tespiti
    const isHybrid = highestScore < 70;

    return {
      predictedRace: bestMatch ? bestMatch.name : 'Melez / Belirsiz Genotip',
      confidence: highestScore > 0 ? highestScore : 40,
      isHybrid: isHybrid,
      candidates: candidates.sort((a, b) => b.score - a.score)
    };
  }
}
