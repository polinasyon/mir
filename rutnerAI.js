/**
 * Friedrich Ruttner & Türkiye Arıcılık Araştırmaları Morfometrik Standartları
 * AI Irk & Ekotip Tanılama Motoru - v2.1 (GitHub Ready)
 *
 * Düzeltmeler:
 * - Diskoidal eşleşme tamamen yeniden yazıldı (büyük/küçük harf duyarsız + doğru Nötr mantığı)
 * - Girdi doğrulama eklendi
 * - Referans CI aralıkları Ruttner 1988 + Türkiye çalışmalarına göre güncellendi
 * - Eşit skor durumunda daha iyi aday seçimi
 * - Test senaryoları eklendi
 * - Daha temiz ve genişletilebilir yapı
 */

export const RUTNER_DATABASE = {
  // Uluslararası Irklar (Ruttner 1988 ortalamalarına daha yakın)
  Carnica: {
    name: 'Karniyol (A. m. carnica)',
    ciMin: 2.20, ciMax: 3.10,
    discoidal: 'pozitif',
    a4Angle: 30.5,
    pilosity: 0.30,
    color: '#38bdf8'
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

  // Türkiye Yerel Ekotipler
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
  /**
   * Çok parametreli ırk/ekotip tanılama
   * @param {number|string} ci - Kübital İndeks
   * @param {string} discoidal - "pozitif" | "negatif" | "nötr" (büyük/küçük harf duyarsız)
   * @param {number|null} [a4Angle=null] - A4 damar açısı (derece)
   * @param {number|null} [pilosity=null] - Tüy uzunluğu (mm)
   * @returns {object}
   */
  static analyzeRace(ci, discoidal, a4Angle = null, pilosity = null) {
    // --- Girdi Doğrulama ---
    const ciNum = parseFloat(ci);
    if (isNaN(ciNum) || ciNum < 1.0 || ciNum > 4.5) {
      return {
        error: true,
        message: 'Geçersiz Kübital İndeks değeri. 1.0 - 4.5 arasında olmalıdır.',
        predictedRace: null,
        confidence: 0,
        isHybrid: true,
        candidates: []
      };
    }

    const disc = (discoidal || '').toString().toLowerCase().trim();
    if (!['pozitif', 'negatif', 'nötr', 'notr', 'neutral​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
