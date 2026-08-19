/**
 * Friedrich Ruttner & Türkiye Arıcılık Araştırmaları Morfometrik Standartları
 * AI Irk & Ekotip Tanılama Motoru - Bilimsel v2.3
 */

export const RUTNER_DATABASE = {
  Carnica: {
    name: 'Karniyol (A. m. carnica)',
    ciMin: 2.20, ciMax: 3.10,
    discoidal: 'pozitif',
    a4Angle: 30.5,
    pilosity: 0.30,
    color: '#38bdf8'
  },
  Carpatica: {
    name: 'Karpat (A. m. carpatica)',
    ciMin: 2.40, ciMax: 2.95,
    discoidal: 'pozitif',
    a4Angle: 30.8,
    pilosity: 0.31,
    color: '#0ea5e9'
  },
  Caucasica: {
    name: 'Kafkas (A. m. caucasica)',
    ciMin: 1.85, ciMax: 2.45,
    discoidal: 'negatif',
    a4Angle: 35.2,
    pilosity: 0.45,
    color: '#10b981'
  },
  Anatolica: {
    name: 'Anadolu Tipik (A. m. anatolica)',
    ciMin: 2.05, ciMax: 2.55,
    discoidal: 'pozitif',
    a4Angle: 32.0,
    pilosity: 0.35,
    color: '#f59e0b'
  },
  Mellifera: {
    name: 'Esmer / Batı Avrupa (A. m. mellifera)',
    ciMin: 1.35, ciMax: 1.95,
    discoidal: 'negatif',
    a4Angle: 38.0,
    pilosity: 0.42,
    color: '#ef4444'
  },
  Ligustica: {
    name: 'İtalyan (A. m. ligustica)',
    ciMin: 2.20, ciMax: 2.85,
    discoidal: 'pozitif',
    a4Angle: 31.0,
    pilosity: 0.28,
    color: '#eab308'
  },
  Mugla: {
    name: 'Muğla Ekotipi (A. m. anatolica)',
    ciMin: 2.10, ciMax: 2.50,
    discoidal: 'pozitif',
    a4Angle: 32.5,
    pilosity: 0.33,
    color: '#d97706'
  },
  Yigilca: {
    name: 'Yığılca Ekotipi (Batı Karadeniz)',
    ciMin: 2.25, ciMax: 2.75,
    discoidal: 'pozitif',
    a4Angle: 29.8,
    pilosity: 0.38,
    color: '#84cc16'
  },
  Hatay: {
    name: 'Hatay / Doğu Akdeniz Ekotipi (A. m. syriaca geçiş)',
    ciMin: 1.90, ciMax: 2.40,
    discoidal: 'nötr',
    a4Angle: 34.0,
    pilosity: 0.25,
    color: '#ec4899'
  },
  Trakya: {
    name: 'Trakya / Gökçeada Popülasyonu',
    ciMin: 2.20, ciMax: 2.70,
    discoidal: 'pozitif',
    a4Angle: 31.2,
    pilosity: 0.32,
    color: '#a855f7'
  }
};

export class RutnerAIEngine {
  static analyzeRace(ci, discoidal, a4Angle = null, pilosity = null) {
    const ciNum = parseFloat(ci);

    if (isNaN(ciNum) || ciNum < 1.0 || ciNum > 4.5) {
      return {
        predictedRace: 'Geçersiz CI değeri',
        confidence: 0,
        isHybrid: true,
        candidates: [],
        error: true,
        message: 'Kübital İndeks 1.0 - 4.5 arasında olmalıdır.'
      };
    }

    const discRaw = (discoidal || '').toString().toLowerCase().trim();
    let normalizedDisc = discRaw;

    if (['pozitif', 'positive', '+'].includes(discRaw)) normalizedDisc = 'pozitif';
    else if (['negatif', 'negative', '-'].includes(discRaw)) normalizedDisc = 'negatif';
    else if (['nötr', 'notr', 'neutral', '0'].includes(discRaw)) normalizedDisc = 'nötr';
    else {
      return {
        predictedRace: 'Geçersiz Diskoidal değeri',
        confidence: 0,
        isHybrid: true,
        candidates: [],
        error: true,
        message: 'Diskoidal değeri "pozitif", "negatif" veya "nötr" olmalıdır.'
      };
    }

    let bestMatch = null;
    let highestScore = -1;
    const candidates = [];

    Object.keys(RUTNER_DATABASE).forEach((key) => {
      const race = RUTNER_DATABASE[key];
      let score = 0;

      // CI (%50)
      if (ciNum >= race.ciMin && ciNum <= race.ciMax) {
        score += 50;
      } else {
        const diff = Math.min(Math.abs(ciNum - race.ciMin), Math.abs(ciNum - race.ciMax));
        if (diff <= 0.12) score += 35;
        else if (diff <= 0.25) score += 20;
        else if (diff <= 0.40) score += 8;
      }

      // Diskoidal (%30)
      if (race.discoidal === 'nötr') {
        score += normalizedDisc === 'nötr' ? 30 : 18;
      } else if (race.discoidal === normalizedDisc) {
        score += 30;
      } else if (normalizedDisc === 'nötr') {
        score += 12;
      }

      // A4 (%10)
      if (a4Angle !== null && !isNaN(parseFloat(a4Angle))) {
        const angleDiff = Math.abs(parseFloat(a4Angle) - race.a4Angle);
        if (angleDiff <= 2.0) score += 10;
        else if (angleDiff <= 4.0) score += 6;
        else if (angleDiff <= 6.5) score += 3;
      } else {
        score += 5;
      }

      // Pilosity (%10)
      if (pilosity !== null && !isNaN(parseFloat(pilosity))) {
        const pilDiff = Math.abs(parseFloat(pilosity) - race.pilosity);
        if (pilDiff <= 0.04) score += 10;
        else if (pilDiff <= 0.08) score += 6;
        else if (pilDiff <= 0.12) score += 3;
      } else {
        score += 5;
      }

      candidates.push({
        key,
        name: race.name,
        score: Math.round(score * 10) / 10,
        color: race.color
      });

      if (score > highestScore) {
        highestScore = score;
        bestMatch = race;
      }
    });

    candidates.sort((a, b) => b.score - a.score);

    const confidence = Math.round(highestScore * 10) / 10;
    const isHybrid = confidence < 68 || (candidates.length > 1 && (candidates[0].score - candidates[1].score) < 12);

    return {
      predictedRace: bestMatch ? bestMatch.name : 'Belirsiz / Genetik Sapma',
      confidence,
      isHybrid,
      candidates,
      error: false
    };
  }
}
