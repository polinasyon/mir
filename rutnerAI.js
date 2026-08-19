/**
 * Friedrich Ruttner & Türkiye Arıcılık Araştırmaları
 * Morfometrik Standartlar + AI Irk & Ekotip Tanılama Motoru
 * Bilimsel v3.0 (Koloni Destekli + İstatistiksel + Gelişmiş Skorlama)
 */

export const RUTNER_DATABASE = {
  Carnica: {
    name: 'Karniyol (A. m. carnica)',
    ciMin: 2.20, ciMax: 3.10,
    discoidal: 'pozitif',
    a4Angle: 30.5,
    pilosity: 0.30,
    color: '#38bdf8',
    region: 'Orta Avrupa / Balkanlar'
  },
  Carpatica: {
    name: 'Karpat (A. m. carpatica)',
    ciMin: 2.40, ciMax: 2.95,
    discoidal: 'pozitif',
    a4Angle: 30.8,
    pilosity: 0.31,
    color: '#0ea5e9',
    region: 'Karpatlar'
  },
  Caucasica: {
    name: 'Kafkas (A. m. caucasica)',
    ciMin: 1.85, ciMax: 2.45,
    discoidal: 'negatif',
    a4Angle: 35.2,
    pilosity: 0.45,
    color: '#10b981',
    region: 'Kafkasya'
  },
  Anatolica: {
    name: 'Anadolu Tipik (A. m. anatolica)',
    ciMin: 2.05, ciMax: 2.55,
    discoidal: 'pozitif',
    a4Angle: 32.0,
    pilosity: 0.35,
    color: '#f59e0b',
    region: 'İç Anadolu'
  },
  Mellifera: {
    name: 'Esmer / Batı Avrupa (A. m. mellifera)',
    ciMin: 1.35, ciMax: 1.95,
    discoidal: 'negatif',
    a4Angle: 38.0,
    pilosity: 0.42,
    color: '#ef4444',
    region: 'Batı Avrupa'
  },
  Ligustica: {
    name: 'İtalyan (A. m. ligustica)',
    ciMin: 2.20, ciMax: 2.85,
    discoidal: 'pozitif',
    a4Angle: 31.0,
    pilosity: 0.28,
    color: '#eab308',
    region: 'İtalya'
  },
  Mugla: {
    name: 'Muğla Ekotipi (A. m. anatolica)',
    ciMin: 2.10, ciMax: 2.50,
    discoidal: 'pozitif',
    a4Angle: 32.5,
    pilosity: 0.33,
    color: '#d97706',
    region: 'Muğla / Ege'
  },
  Yigilca: {
    name: 'Yığılca Ekotipi (Batı Karadeniz)',
    ciMin: 2.25, ciMax: 2.75,
    discoidal: 'pozitif',
    a4Angle: 29.8,
    pilosity: 0.38,
    color: '#84cc16',
    region: 'Düzce / Yığılca'
  },
  Hatay: {
    name: 'Hatay / Doğu Akdeniz Ekotipi (A. m. syriaca geçiş)',
    ciMin: 1.90, ciMax: 2.40,
    discoidal: 'nötr',
    a4Angle: 34.0,
    pilosity: 0.25,
    color: '#ec4899',
    region: 'Hatay / Doğu Akdeniz'
  },
  Trakya: {
    name: 'Trakya / Gökçeada Popülasyonu',
    ciMin: 2.20, ciMax: 2.70,
    discoidal: 'pozitif',
    a4Angle: 31.2,
    pilosity: 0.32,
    color: '#a855f7',
    region: 'Trakya / Gökçeada'
  }
};

export class RutnerAIEngine {

  // ====================== YARDIMCI İSTATİSTİK ======================
  static mean(arr) {
    if (!arr.length) return 0;
    return arr.reduce((a, b) => a + b, 0) / arr.length;
  }

  static median(arr) {
    if (!arr.length) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  }

  static stdDev(arr) {
    if (arr.length < 2) return 0;
    const m = this.mean(arr);
    const variance = arr.reduce((sum, val) => sum + Math.pow(val - m, 2), 0) / (arr.length - 1);
    return Math.sqrt(variance);
  }

  static coefficientOfVariation(arr) {
    const m = this.mean(arr);
    if (m === 0) return 0;
    return (this.stdDev(arr) / m) * 100;
  }

  static confidenceInterval95(arr) {
    if (arr.length < 2) return { low: 0, high: 0 };
    const m = this.mean(arr);
    const se = this.stdDev(arr) / Math.sqrt(arr.length);
    const margin = 1.96 * se;
    return {
      low: parseFloat((m - margin).toFixed(3)),
      high: parseFloat((m + margin).toFixed(3))
    };
  }

  // ====================== A4 AÇISI ======================
  static calculateA4FromDistances(distA, distB) {
    if (!distA || !distB || distB === 0) return null;
    const angleRadian = Math.atan(distA / distB);
    return parseFloat((angleRadian * (180 / Math.PI)).toFixed(2));
  }

  // ====================== KOLONİ ANALİZİ ======================
  static analyzeColony(samples) {
    if (!Array.isArray(samples) || samples.length === 0) {
      return {
        error: true,
        message: 'Örneklem dizisi boş olamaz.',
        predictedRace: 'Yetersiz Veri',
        confidence: 0,
        isHybrid: true
      };
    }

    const ciValues = [];
    const a4Values = [];
    const pilosityValues = [];
    const discoidalCounts = { pozitif: 0, negatif: 0, nötr: 0 };

    samples.forEach(sample => {
      const ci = parseFloat(sample.ci);
      if (!isNaN(ci)) ciValues.push(ci);

      if (sample.a4Angle != null && !isNaN(parseFloat(sample.a4Angle))) {
        a4Values.push(parseFloat(sample.a4Angle));
      }
      if (sample.pilosity != null && !isNaN(parseFloat(sample.pilosity))) {
        pilosityValues.push(parseFloat(sample.pilosity));
      }

      const disc = this.normalizeDiscoidal(sample.discoidal);
      if (disc) discoidalCounts[disc]++;
    });

    const n = samples.length;
    const avgCI = this.mean(ciValues);
    const medianCI = this.median(ciValues);
    const avgA4 = a4Values.length ? this.mean(a4Values) : null;
    const avgPilosity = pilosityValues.length ? this.mean(pilosityValues) : null;

    // Baskın diskoidal
    let dominantDiscoidal = 'nötr';
    let maxCount = -1;
    for (const [key, count] of Object.entries(discoidalCounts)) {
      if (count > maxCount) {
        maxCount = count;
        dominantDiscoidal = key;
      }
    }

    const ciStd = this.stdDev(ciValues);
    const ciCV = this.coefficientOfVariation(ciValues);
    const ciCI95 = this.confidenceInterval95(ciValues);

    // Ana analiz (medyan CI ile daha robust)
    const raceResult = this.analyzeRace(medianCI, dominantDiscoidal, avgA4, avgPilosity);

    // Hybrid Index (0-100) → yüksek = daha fazla melezleşme riski
    const hybridIndex = Math.min(100, Math.round(
      (ciCV * 1.6) +
      (raceResult.confidence < 72 ? 22 : 0) +
      (n < 8 ? 18 : n < 12 ? 8 : 0) +
      (Math.abs(avgCI - medianCI) > 0.15 ? 10 : 0)   // outlier cezası
    ));

    // Koloni Kalite Skoru (0-100)
    const qualityScore = Math.max(0, Math.min(100, Math.round(
      (raceResult.confidence * 0.52) +
      (Math.max(0, 45 - ciCV) * 0.75) +
      (n >= 12 ? 18 : n >= 8 ? 10 : n >= 5 ? 4 : 0)
    )));

    return {
      ...raceResult,
      sampleCount: n,
      avgCI: parseFloat(avgCI.toFixed(2)),
      medianCI: parseFloat(medianCI.toFixed(2)),
      avgA4: avgA4 !== null ? parseFloat(avgA4.toFixed(2)) : null,
      avgPilosity: avgPilosity !== null ? parseFloat(avgPilosity.toFixed(3)) : null,
      dominantDiscoidal,
      ciStdDev: parseFloat(ciStd.toFixed(3)),
      ciCV: parseFloat(ciCV.toFixed(1)),
      ci95: ciCI95,
      hybridIndex,
      qualityScore,
      recommendation: this.generateRecommendation(raceResult, hybridIndex, qualityScore, n, ciCV)
    };
  }

  // ====================== BİREYSEL / ORTALAMA ANALİZ ======================
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

    const normalizedDisc = this.normalizeDiscoidal(discoidal);
    if (!normalizedDisc) {
      return {
        predictedRace: 'Geçersiz Diskoidal değeri',
        confidence: 0,
        isHybrid: true,
        candidates: [],
        error: true,
        message: 'Diskoidal değeri "pozitif", "negatif" veya "nötr" olmalıdır.'
      };
    }

    const candidates = [];

    Object.keys(RUTNER_DATABASE).forEach((key) => {
      const race = RUTNER_DATABASE[key];
      let score = 0;

      // 1. CI (%48) – Gaussian benzeri yumuşak puanlama
      if (ciNum >= race.ciMin && ciNum <= race.ciMax) {
        score += 48;
      } else {
        const mid = (race.ciMin + race.ciMax) / 2;
        const range = (race.ciMax - race.ciMin) / 2;
        const diff = Math.abs(ciNum - mid);
        const normalized = Math.max(0, 1 - (diff / (range + 0.55)));
        score += normalized * 48;
      }

      // 2. Diskoidal (%28)
      if (race.discoidal === normalizedDisc) {
        score += 28;
      } else if (race.discoidal === 'nötr' || normalizedDisc === 'nötr') {
        score += 12;
      } else {
        score += 0;
      }

      // 3. A4 Açısı (%15)
      if (a4Angle !== null && !isNaN(parseFloat(a4Angle))) {
        const angleDiff = Math.abs(parseFloat(a4Angle) - race.a4Angle);
        if (angleDiff <= 1.2) score += 15;
        else if (angleDiff <= 2.5) score += 11;
        else if (angleDiff <= 4.0) score += 7;
        else if (angleDiff <= 6.5) score += 3;
        else score += 0;
      } else {
        score += 6; // veri yok → nötr
      }

      // 4. Pilosity (%9)
      if (pilosity !== null && !isNaN(parseFloat(pilosity))) {
        const pilDiff = Math.abs(parseFloat(pilosity) - race.pilosity);
        if (pilDiff <= 0.025) score += 9;
        else if (pilDiff <= 0.05) score += 6;
        else if (pilDiff <= 0.09) score += 3;
      } else {
        score += 3.5;
      }

      candidates.push({
        key,
        name: race.name,
        score: Math.round(score * 10) / 10,
        color: race.color,
        region: race.region
      });
    });

    candidates.sort((a, b) => b.score - a.score);

    const best = candidates[0];
    const second = candidates[1];
    const confidence = best ? best.score : 0;

    const isHybrid =
      confidence < 70 ||
      (second && (best.score - second.score) < 9.5);

    return {
      predictedRace: best ? best.name : 'Belirsiz / Genetik Sapma',
      confidence: Math.round(confidence * 10) / 10,
      isHybrid,
      candidates: candidates.slice(0, 5),
      topThree: candidates.slice(0, 3),
      error: false
    };
  }

  // ====================== YARDIMCI ======================
  static normalizeDiscoidal(value) {
    if (value == null) return null;
    const raw = value.toString().toLowerCase().trim();

    if (['pozitif', 'positive', '+', 'pos'].includes(raw)) return 'pozitif';
    if (['negatif', 'negative', '-', 'neg'].includes(raw)) return 'negatif';
    if (['nötr', 'notr', 'neutral', '0', 'neut'].includes(raw)) return 'nötr';

    const num = parseFloat(raw);
    if (!isNaN(num)) {
      if (num > 1.8) return 'pozitif';
      if (num < -1.8) return 'negatif';
      return 'nötr';
    }

    return null;
  }

  static generateRecommendation(raceResult, hybridIndex, qualityScore, sampleCount, ciCV) {
    const recs = [];

    if (sampleCount < 8) {
      recs.push('Örneklem sayısı düşük. Daha güvenilir sonuç için 10-15 arı ölçümü önerilir.');
    } else if (sampleCount >= 12) {
      recs.push('Yeterli örneklem büyüklüğü sağlandı.');
    }

    if (hybridIndex > 58) {
      recs.push('Yüksek genetik varyasyon tespit edildi. Saf hat koruma veya kontrollü ıslah programı önerilir.');
    } else if (hybridIndex < 22 && raceResult.confidence > 78) {
      recs.push('Koloni oldukça homojen görünüyor. Saf hat damızlık potansiyeli yüksek.');
    }

    if (qualityScore >= 82) {
      recs.push('Yüksek kalite skoru. Damızlık adayı olarak değerlendirilebilir.');
    } else if (qualityScore < 48) {
      recs.push('Kalite skoru düşük. Morfometrik olarak standartlardan sapma mevcut.');
    }

    if (raceResult.isHybrid) {
      recs.push('Melezleşme belirtileri var. Islah programında dikkatli olunmalı.');
    }

    if (ciCV > 12) {
      recs.push('CI varyasyonu yüksek. Koloni içinde heterojenlik mevcut.');
    }

    return recs.length ? recs : ['Veriler standart aralıkta. Özel bir uyarı bulunmuyor.'];
  }
}
