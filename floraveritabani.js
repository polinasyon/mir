// floraveritabani.js 

window.FLORA_VERITABANI = {
  
  // ====================== MARMARA BÖLGESİ ======================
  "istanbul": {
    flora: "Kentsel Orman – Akasya, Ihlamur, Kestane, Funda",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 520, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Badem",       verim: 50, tur: "polen",  gddMin: 120, gddMax: 200 },
      { ay: "Nisan",   bitki: "Erguvan / Meyve",     verim: 65, tur: "polen",  gddMin: 210, gddMax: 350 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 85, tur: "nektar", gddMin: 360, gddMax: 500 },
      { ay: "Haziran", bitki: "Ihlamur / Kestane",   verim: 90, tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Böğürtlen / Otsu",    verim: 60, tur: "nektar", gddMin: 710, gddMax: 900 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Püren / Funda",       verim: 75, tur: "nektar", gddMin: 1110, gddMax: 1250 },
      { ay: "Ekim",    bitki: "Kocayemiş / Güz",     verim: 40, tur: "polen",  gddMin: 1260, gddMax: 1350 }
    ]
  },
  "edirne": {
    flora: "Trakya Ovası – Kanola, Ayçiçeği, Akasya, Yonca",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 45, tur: "polen",  gddMin: 130, gddMax: 220 },
      { ay: "Nisan",   bitki: "Kanola / Hardal",     verim: 90, tur: "nektar", gddMin: 230, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Akasya / Karaçalı",   verim: 80, tur: "nektar", gddMin: 410, gddMax: 550 },
      { ay: "Haziran", bitki: "Yonca",               verim: 75, tur: "nektar", gddMin: 560, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve",      verim: 95, tur: "nektar", gddMin: 710, gddMax: 950 },
      { ay: "Ağustos", bitki: "Ayçiçeği Son / Kurak",verim: 40, tur: "kıtlık", gddMin: 960, gddMax: 1150 },
      { ay: "Eylül",   bitki: "Sonbahar Çayırları",  verim: 35, tur: "polen",  gddMin: 1160, gddMax: 1300 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1310, gddMax: 1400 }
    ]
  },
  "kırklareli": {
    flora: "Istranca Ormanları – Meşe Salgısı, Ihlamur, Ayçiçeği",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 540, nektarBitis: 850 },
    timeline: [
      { ay: "Mart",    bitki: "Orman Altı Polen",    verim: 55, tur: "polen",  gddMin: 110, gddMax: 200 },
      { ay: "Nisan",   bitki: "Kanola / Meyve",      verim: 85, tur: "nektar", gddMin: 210, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 80, tur: "nektar", gddMin: 390, gddMax: 550 },
      { ay: "Haziran", bitki: "Ihlamur / Karaçalı",  verim: 90, tur: "nektar", gddMin: 560, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Meşe",     verim: 95, tur: "nektar", gddMin: 730, gddMax: 920 },
      { ay: "Ağustos", bitki: "Meşe Salgısı Devam",  verim: 85, tur: "salgı",  gddMin: 930, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Püren (Süpürge Otu)", verim: 75, tur: "nektar", gddMin: 1110, gddMax: 1250 },
      { ay: "Ekim",    bitki: "Güz Florası",         verim: 30, tur: "polen",  gddMin: 1260, gddMax: 1350 }
    ]
  },
  "tekirdağ": {
    flora: "Trakya – Kanola, Ayçiçeği, Karaçalı",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Polen",       verim: 40, tur: "polen",  gddMin: 120, gddMax: 210 },
      { ay: "Nisan",   bitki: "Kanola",              verim: 95, tur: "nektar", gddMin: 220, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Karaçalı / Meyve",    verim: 80, tur: "nektar", gddMin: 410, gddMax: 550 },
      { ay: "Haziran", bitki: "Yonca / Otsu",        verim: 70, tur: "nektar", gddMin: 560, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Ayçiçeği",            verim: 98, tur: "nektar", gddMin: 710, gddMax: 920 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 930, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Güz Çiçekleri",       verim: 40, tur: "polen",  gddMin: 1110, gddMax: 1250 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1260, gddMax: 1350 }
    ]
  },
  "çanakkale": {
    flora: "Marmara-Ege Geçiş – Çam, Kekik, Kestane, Kanola",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 280, nektarZirve: 560, nektarBitis: 900 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Söğüt",       verim: 60, tur: "polen",  gddMin: 150, gddMax: 250 },
      { ay: "Nisan",   bitki: "Kanola / Meyve",      verim: 85, tur: "nektar", gddMin: 260, gddMax: 420 },
      { ay: "Mayıs",   bitki: "Kekik / Zeytin",      verim: 80, tur: "nektar", gddMin: 430, gddMax: 580 },
      { ay: "Haziran", bitki: "Kestane / Dağ",       verim: 90, tur: "nektar", gddMin: 590, gddMax: 780 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Hayıt",    verim: 85, tur: "nektar", gddMin: 790, gddMax: 980 },
      { ay: "Ağustos", bitki: "Çam Salgısı Başlangıç",verim:85, tur: "salgı",  gddMin: 990, gddMax: 1150 },
      { ay: "Eylül",   bitki: "Çam Zirve",           verim: 95, tur: "salgı",  gddMin: 1160, gddMax: 1300 },
      { ay: "Ekim",    bitki: "Geç Çam / Püren",     verim: 80, tur: "nektar", gddMin: 1310, gddMax: 1450 }
    ]
  },
  "bursa": {
    flora: "Uludağ Etekleri – Kestane, Ihlamur, Meyve, Ayçiçeği",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 540, nektarBitis: 850 },
    timeline: [
      { ay: "Mart",    bitki: "Şeftali / Erken Meyve",verim:70, tur: "polen",  gddMin: 130, gddMax: 240 },
      { ay: "Nisan",   bitki: "Meyve / Hardal",      verim: 80, tur: "nektar", gddMin: 250, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 85, tur: "nektar", gddMin: 410, gddMax: 550 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 98, tur: "nektar", gddMin: 560, gddMax: 750 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Uludağ",   verim: 90, tur: "nektar", gddMin: 760, gddMax: 950 },
      { ay: "Ağustos", bitki: "Yayla Çiçekleri",     verim: 75, tur: "nektar", gddMin: 960, gddMax: 1150 },
      { ay: "Eylül",   bitki: "Sonbahar Otsuları",   verim: 45, tur: "polen",  gddMin: 1160, gddMax: 1300 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 20, tur: "kıtlık", gddMin: 1310, gddMax: 1400 }
    ]
  },
  "balıkesir": {
    flora: "Marmara-Ege – Kestane, Çam, Pamuk, Ayçiçeği, Kekik",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 280, nektarZirve: 560, nektarBitis: 900 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Meyve",       verim: 55, tur: "polen",  gddMin: 140, gddMax: 250 },
      { ay: "Nisan",   bitki: "Kanola / Meyve",      verim: 85, tur: "nektar", gddMin: 260, gddMax: 420 },
      { ay: "Mayıs",   bitki: "Akasya / Kekik",      verim: 85, tur: "nektar", gddMin: 430, gddMax: 580 },
      { ay: "Haziran", bitki: "Kestane / Pamuk",     verim: 90, tur: "nektar", gddMin: 590, gddMax: 780 },
      { ay: "Temmuz",  bitki: "Ayçiçeği",            verim: 95, tur: "nektar", gddMin: 790, gddMax: 980 },
      { ay: "Ağustos", bitki: "Çam Salgısı Başlangıç",verim:80, tur: "salgı",  gddMin: 990, gddMax: 1150 },
      { ay: "Eylül",   bitki: "Çam Zirve",           verim: 95, tur: "salgı",  gddMin: 1160, gddMax: 1300 },
      { ay: "Ekim",    bitki: "Geç Çam / Püren",     verim: 75, tur: "nektar", gddMin: 1310, gddMax: 1450 }
    ]
  },
  "kocaeli": {
    flora: "Marmara Geçiş – Kestane, Ihlamur, Fındık",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen / Fındık",verim: 60, tur: "polen",  gddMin: 120, gddMax: 220 },
      { ay: "Nisan",   bitki: "Meyve / Orman Altı",  verim: 75, tur: "nektar", gddMin: 230, gddMax: 390 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 85, tur: "nektar", gddMin: 400, gddMax: 540 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 95, tur: "nektar", gddMin: 550, gddMax: 750 },
      { ay: "Temmuz",  bitki: "Böğürtlen / Otsu",    verim: 65, tur: "nektar", gddMin: 760, gddMax: 900 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Püren",               verim: 70, tur: "nektar", gddMin: 1060, gddMax: 1200 },
      { ay: "Ekim",    bitki: "Kocayemiş",           verim: 45, tur: "polen",  gddMin: 1210, gddMax: 1300 }
    ]
  },
  "sakarya": {
    flora: "Marmara/Karadeniz Geçiş – Fındık, Kestane, Ihlamur, Akasya",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Fındık Poleni",       verim: 70, tur: "polen",  gddMin: 120, gddMax: 220 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "polen",  gddMin: 230, gddMax: 390 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 90, tur: "nektar", gddMin: 400, gddMax: 540 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 98, tur: "nektar", gddMin: 550, gddMax: 750 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Mısır",    verim: 80, tur: "nektar", gddMin: 760, gddMax: 920 },
      { ay: "Ağustos", bitki: "Otsu Bitkiler",       verim: 40, tur: "polen",  gddMin: 930, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 50, tur: "polen",  gddMin: 1110, gddMax: 1250 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1260, gddMax: 1350 }
    ]
  },
  "yalova": {
    flora: "Marmara Kıyı – Kestane, Ihlamur, Kivi, Meyve",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 530, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Meyve",         verim: 60, tur: "polen",  gddMin: 130, gddMax: 230 },
      { ay: "Nisan",   bitki: "Meyve / Bahar Çiçeği",verim: 80, tur: "nektar", gddMin: 240, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Kivi / Akasya",       verim: 85, tur: "nektar", gddMin: 410, gddMax: 560 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 95, tur: "nektar", gddMin: 570, gddMax: 750 },
      { ay: "Temmuz",  bitki: "Orman Altı",          verim: 50, tur: "nektar", gddMin: 760, gddMax: 900 },
      { ay: "Ağustos", bitki: "Kurak",               verim: 25, tur: "kıtlık", gddMin: 910, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Güz Florası",         verim: 40, tur: "polen",  gddMin: 1060, gddMax: 1200 },
      { ay: "Ekim",    bitki: "Kocayemiş",           verim: 45, tur: "polen",  gddMin: 1210, gddMax: 1300 }
    ]
  },
  "bilecik": {
    flora: "Geçiş İklimi – Kestane, Kekik, Ayçiçeği, Geven",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 850 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Polen",       verim: 50, tur: "polen",  gddMin: 110, gddMax: 200 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "polen",  gddMin: 210, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Akasya / Kekik",      verim: 85, tur: "nektar", gddMin: 390, gddMax: 550 },
      { ay: "Haziran", bitki: "Kestane / Yonca",     verim: 90, tur: "nektar", gddMin: 560, gddMax: 760 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Geven",    verim: 85, tur: "nektar", gddMin: 770, gddMax: 950 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 35, tur: "kıtlık", gddMin: 960, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Sonbahar Otsuları",   verim: 40, tur: "polen",  gddMin: 1110, gddMax: 1250 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1260, gddMax: 1350 }
    ]
  },

  // ====================== EGE BÖLGESİ ======================
  "izmir": {
    flora: "Ege – Çam, Kekik, Narenciye, Zeytin, Hayıt",
    baseTemp: 12, gdd: { ciceklenmeBaslangic: 300, nektarZirve: 640, nektarBitis: 980 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye Başlangıç", verim: 75, tur: "nektar", gddMin: 150, gddMax: 280 },
      { ay: "Nisan",   bitki: "Narenciye / Defne",   verim: 95, tur: "nektar", gddMin: 290, gddMax: 450 },
      { ay: "Mayıs",   bitki: "Zeytin / Kekik",      verim: 80, tur: "nektar", gddMin: 460, gddMax: 620 },
      { ay: "Haziran", bitki: "Hayıt / Dağ Kekiği",  verim: 90, tur: "nektar", gddMin: 630, gddMax: 820 },
      { ay: "Temmuz",  bitki: "Pamuk / Otsu",        verim: 70, tur: "nektar", gddMin: 830, gddMax: 1050 },
      { ay: "Ağustos", bitki: "Çam Salgısı Başlangıç",verim:85, tur: "salgı",  gddMin: 1060, gddMax: 1250 },
      { ay: "Eylül",   bitki: "Çam Balı Zirve",      verim: 98, tur: "salgı",  gddMin: 1260, gddMax: 1450 },
      { ay: "Ekim",    bitki: "Geç Çam / Püren",     verim: 85, tur: "nektar", gddMin: 1460, gddMax: 1600 }
    ]
  },
  "manisa": {
    flora: "Ege İç – Üzüm, Kekik, Çam, Kestane (Spil)",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 290, nektarZirve: 600, nektarBitis: 950 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Söğüt",       verim: 65, tur: "polen",  gddMin: 140, gddMax: 260 },
      { ay: "Nisan",   bitki: "Meyve / Hardal",      verim: 80, tur: "nektar", gddMin: 270, gddMax: 430 },
      { ay: "Mayıs",   bitki: "Kekik / Zeytin",      verim: 85, tur: "nektar", gddMin: 440, gddMax: 600 },
      { ay: "Haziran", bitki: "Kestane / Pamuk",     verim: 90, tur: "nektar", gddMin: 610, gddMax: 800 },
      { ay: "Temmuz",  bitki: "Üzüm (Bağ) / Pamuk",  verim: 75, tur: "nektar", gddMin: 810, gddMax: 1000 },
      { ay: "Ağustos", bitki: "Çam Salgısı (Kısmi)", verim: 70, tur: "salgı",  gddMin: 1010, gddMax: 1200 },
      { ay: "Eylül",   bitki: "Çam Zirve / Püren",   verim: 90, tur: "salgı",  gddMin: 1210, gddMax: 1350 },
      { ay: "Ekim",    bitki: "Güz Florası",         verim: 40, tur: "polen",  gddMin: 1360, gddMax: 1500 }
    ]
  },
  "aydın": {
    flora: "Ege – Çam, Narenciye, Hayıt, Pamuk, Kestane",
    baseTemp: 12, gdd: { ciceklenmeBaslangic: 310, nektarZirve: 650, nektarBitis: 1000 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye Başlangıç", verim: 80, tur: "nektar", gddMin: 160, gddMax: 300 },
      { ay: "Nisan",   bitki: "Narenciye Zirve",     verim: 95, tur: "nektar", gddMin: 310, gddMax: 480 },
      { ay: "Mayıs",   bitki: "Zeytin / Kekik",      verim: 80, tur: "nektar", gddMin: 490, gddMax: 650 },
      { ay: "Haziran", bitki: "Kestane / Hayıt",     verim: 95, tur: "nektar", gddMin: 660, gddMax: 850 },
      { ay: "Temmuz",  bitki: "Pamuk",               verim: 85, tur: "nektar", gddMin: 860, gddMax: 1080 },
      { ay: "Ağustos", bitki: "Çam Salgısı",         verim: 90, tur: "salgı",  gddMin: 1090, gddMax: 1300 },
      { ay: "Eylül",   bitki: "Çam Zirve",           verim: 98, tur: "salgı",  gddMin: 1310, gddMax: 1500 },
      { ay: "Ekim",    bitki: "Geç Çam / Püren",     verim: 85, tur: "nektar", gddMin: 1510, gddMax: 1650 }
    ]
  },
  "muğla": {
    flora: "Ege Kıyısı – Dünya Çam Balı Merkezi, Narenciye, Hayıt",
    baseTemp: 12, gdd: { ciceklenmeBaslangic: 320, nektarZirve: 680, nektarBitis: 1050 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye / Erken Badem",verim:75, tur: "nektar", gddMin: 170, gddMax: 300 },
      { ay: "Nisan",   bitki: "Narenciye Zirve",     verim: 95, tur: "nektar", gddMin: 310, gddMax: 480 },
      { ay: "Mayıs",   bitki: "Kekik / Zeytin",      verim: 85, tur: "nektar", gddMin: 490, gddMax: 670 },
      { ay: "Haziran", bitki: "Hayıt / Dağ Florası", verim: 90, tur: "nektar", gddMin: 680, gddMax: 880 },
      { ay: "Temmuz",  bitki: "Sıcak/Kurak Geçiş",   verim: 40, tur: "kıtlık", gddMin: 890, gddMax: 1100 },
      { ay: "Ağustos", bitki: "1. Kesim Çam Salgısı",verim: 95, tur: "salgı",  gddMin: 1110, gddMax: 1350 },
      { ay: "Eylül",   bitki: "2. Kesim Çam Zirve",  verim: 100,tur: "salgı",  gddMin: 1360, gddMax: 1550 },
      { ay: "Ekim",    bitki: "3. Kesim Çam / Püren",verim: 90, tur: "salgı",  gddMin: 1560, gddMax: 1700 }
    ]
  },
  "denizli": {
    flora: "İç Ege – Kekik (Çal), Çam, Pamuk, Yayla",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 300, nektarZirve: 600, nektarBitis: 920 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Meyve",       verim: 65, tur: "polen",  gddMin: 140, gddMax: 250 },
      { ay: "Nisan",   bitki: "Hardal / Kanola",     verim: 80, tur: "nektar", gddMin: 260, gddMax: 420 },
      { ay: "Mayıs",   bitki: "Meyve / Zeytin",      verim: 75, tur: "nektar", gddMin: 430, gddMax: 590 },
      { ay: "Haziran", bitki: "Kekik (Tıbbi) / Dağ", verim: 98, tur: "nektar", gddMin: 600, gddMax: 800 },
      { ay: "Temmuz",  bitki: "Pamuk / Geven",       verim: 85, tur: "nektar", gddMin: 810, gddMax: 1000 },
      { ay: "Ağustos", bitki: "Çam Salgısı",         verim: 80, tur: "salgı",  gddMin: 1010, gddMax: 1200 },
      { ay: "Eylül",   bitki: "Çam / Sonbahar",      verim: 85, tur: "salgı",  gddMin: 1210, gddMax: 1350 },
      { ay: "Ekim",    bitki: "Geç Çam / Kışa Hazırlık",verim:40, tur: "polen",  gddMin: 1360, gddMax: 1450 }
    ]
  },
  "uşak": {
    flora: "İç Ege Geçiş – Kekik, Geven, Yonca",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 280, nektarZirve: 550, nektarBitis: 850 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Çayır",       verim: 50, tur: "polen",  gddMin: 110, gddMax: 200 },
      { ay: "Nisan",   bitki: "Meyve / Hardal",      verim: 75, tur: "polen",  gddMin: 210, gddMax: 370 },
      { ay: "Mayıs",   bitki: "Akasya / Korunga",    verim: 85, tur: "nektar", gddMin: 380, gddMax: 540 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 95, tur: "nektar", gddMin: 550, gddMax: 750 },
      { ay: "Temmuz",  bitki: "Geven / Ayçiçeği",    verim: 85, tur: "nektar", gddMin: 760, gddMax: 950 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 960, gddMax: 1100 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 40, tur: "polen",  gddMin: 1110, gddMax: 1250 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1260, gddMax: 1350 }
    ]
  },
  "kütahya": {
    flora: "Ege-İç Anadolu Geçiş – Kestane (Simav), Kekik, Çam, Geven",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 530, nektarBitis: 830 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 40, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 70, tur: "polen",  gddMin: 190, gddMax: 350 },
      { ay: "Mayıs",   bitki: "Akasya / Kekik",      verim: 80, tur: "nektar", gddMin: 360, gddMax: 520 },
      { ay: "Haziran", bitki: "Kestane (Simav) / Yonca",verim:90, tur: "nektar", gddMin: 530, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",       verim: 85, tur: "nektar", gddMin: 730, gddMax: 900 },
      { ay: "Ağustos", bitki: "Çam / Kurak",         verim: 60, tur: "salgı",  gddMin: 910, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Güz Çiçekleri",       verim: 40, tur: "polen",  gddMin: 1060, gddMax: 1200 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1210, gddMax: 1300 }
    ]
  },
  "simav": {
  flora: "İç Ege Geçiş – Kestane (Castanea sativa), Kekik (Thymus), Orman Altı, Geven, Ayçiçeği",
  baseTemp: 8,
  gdd: { 
    ciceklenmeBaslangic: 280,   // Erken bahar uyanışı
    nektarZirve: 580,           // Kestane ana nektar dönemi
    nektarBitis: 880            // Yaz sonu / erken sonbahar
  },
  timeline: [
    { ay: "Mart",    bitki: "Söğüt / Badem / Erken Polen",           verim: 45, tur: "polen",  gddMin: 110, gddMax: 200 },
    { ay: "Nisan",   bitki: "Meyve Ağaçları / Yabani Hardal",        verim: 70, tur: "polen",  gddMin: 210, gddMax: 370 },
    { ay: "Mayıs",   bitki: "Akasya / Çayır / Erken Kekik",          verim: 75, tur: "nektar", gddMin: 380, gddMax: 540 },
    { ay: "Haziran", bitki: "Kestane (Castanea) + Ihlamur",          verim: 95, tur: "nektar", gddMin: 550, gddMax: 720 },
    { ay: "Temmuz",  bitki: "Orman Altı + Kekik + Geven",            verim: 88, tur: "nektar", gddMin: 730, gddMax: 900 },
    { ay: "Ağustos", bitki: "Ayçiçeği + Geç Orman Altı / Kekik",     verim: 70, tur: "nektar", gddMin: 910, gddMax: 1080 },
    { ay: "Eylül",   bitki: "Sonbahar Otsuları / Püren (sınırlı)",    verim: 40, tur: "polen",  gddMin: 1090, gddMax: 1230 },
    { ay: "Ekim",    bitki: "Kışlatma Dönemi",                       verim: 12, tur: "kıtlık", gddMin: 1240, gddMax: 1340 }
  ]
},
"afyonkarahisar": {
    flora: "İç Ege Yüksek Geçiş – Haşhaş, Geven, Kekik, Yayla",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 520, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Çiçekleri / Polen",verim:40, tur: "polen",  gddMin: 90,  gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 70, tur: "polen",  gddMin: 190, gddMax: 340 },
      { ay: "Mayıs",   bitki: "Haşhaş / Korunga",    verim: 85, tur: "nektar", gddMin: 350, gddMax: 500 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 95, tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",       verim: 90, tur: "nektar", gddMin: 710, gddMax: 880 },
      { ay: "Ağustos", bitki: "Otsu / Kurak",        verim: 40, tur: "kıtlık", gddMin: 890, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Sonbahar Florası",    verim: 45, tur: "polen",  gddMin: 1060, gddMax: 1180 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1190, gddMax: 1280 }
    ]
  },

  // ====================== AKDENİZ BÖLGESİ ======================
  "antalya": {
    flora: "Akdeniz – Narenciye, Çam, Püren, Keçiboynuzu, Susam",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 350, nektarZirve: 700, nektarBitis: 1100 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",           verim: 95, tur: "nektar", gddMin: 180, gddMax: 320 },
      { ay: "Nisan",   bitki: "Narenciye Zirve / Avokado",verim:98,tur:"nektar", gddMin: 330, gddMax: 500 },
      { ay: "Mayıs",   bitki: "Zeytin / Hayıt / Susam",verim:85,tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Haziran", bitki: "Dağ Florası / Kekik", verim: 80, tur: "nektar", gddMin: 710, gddMax: 920 },
      { ay: "Temmuz",  bitki: "Yüksek Yayla (Toroslar)",verim:85,tur: "nektar", gddMin: 930, gddMax: 1150 },
      { ay: "Ağustos", bitki: "Çam Salgısı Başlangıç",verim:80, tur: "salgı",  gddMin: 1160, gddMax: 1380 },
      { ay: "Eylül",   bitki: "Çam Zirve / Püren",   verim: 95, tur: "salgı",  gddMin: 1390, gddMax: 1600 },
      { ay: "Ekim",    bitki: "Keçiboynuzu / Püren", verim: 90, tur: "nektar", gddMin: 1610, gddMax: 1750 }
    ]
  },
  "mersin": {
    flora: "Toroslar – Narenciye, Sedir, Çam, Kekik, Keçiboynuzu",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 340, nektarZirve: 690, nektarBitis: 1080 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",           verim: 95, tur: "nektar", gddMin: 170, gddMax: 310 },
      { ay: "Nisan",   bitki: "Narenciye / Erken Kekik",verim:90,tur:"nektar", gddMin: 320, gddMax: 490 },
      { ay: "Mayıs",   bitki: "Kekik / Defne",       verim: 85, tur: "nektar", gddMin: 500, gddMax: 680 },
      { ay: "Haziran", bitki: "Sedir / Yayla Kekiği",verim: 90, tur: "salgı",  gddMin: 690, gddMax: 900 },
      { ay: "Temmuz",  bitki: "Geven (Yüksekler)",   verim: 85, tur: "nektar", gddMin: 910, gddMax: 1120 },
      { ay: "Ağustos", bitki: "Kızılçam Salgısı",    verim: 80, tur: "salgı",  gddMin: 1130, gddMax: 1350 },
      { ay: "Eylül",   bitki: "Çam Zirve",           verim: 90, tur: "salgı",  gddMin: 1360, gddMax: 1550 },
      { ay: "Ekim",    bitki: "Keçiboynuzu",         verim: 95, tur: "nektar", gddMin: 1560, gddMax: 1720 }
    ]
  },
  "adana": {
    flora: "Çukurova – Narenciye, Ayçiçeği, Pamuk, Toros Geveni",
    baseTemp: 14, gdd: { ciceklenmeBaslangic: 360, nektarZirve: 720, nektarBitis: 1150 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye Zirve",     verim: 98, tur: "nektar", gddMin: 190, gddMax: 350 },
      { ay: "Nisan",   bitki: "Okaliptüs / Bahar",   verim: 85, tur: "nektar", gddMin: 360, gddMax: 530 },
      { ay: "Mayıs",   bitki: "Ayçiçeği / Akasya",   verim: 90, tur: "nektar", gddMin: 540, gddMax: 740 },
      { ay: "Haziran", bitki: "Pamuk Başlangıç",     verim: 85, tur: "nektar", gddMin: 750, gddMax: 980 },
      { ay: "Temmuz",  bitki: "Pamuk Zirve",         verim: 95, tur: "nektar", gddMin: 990, gddMax: 1220 },
      { ay: "Ağustos", bitki: "Pamuk Son / Kurak",   verim: 60, tur: "nektar", gddMin: 1230, gddMax: 1450 },
      { ay: "Eylül",   bitki: "Sonbahar Otsuları",   verim: 40, tur: "polen",  gddMin: 1460, gddMax: 1650 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 20, tur: "kıtlık", gddMin: 1660, gddMax: 1800 }
    ]
  },
  "hatay": {
    flora: "Amik & Amanoslar – Narenciye, Defne, Pamuk, Kekik",
    baseTemp: 14, gdd: { ciceklenmeBaslangic: 360, nektarZirve: 710, nektarBitis: 1120 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye / Erken Badem",verim:95,tur:"nektar", gddMin: 180, gddMax: 340 },
      { ay: "Nisan",   bitki: "Narenciye / Defne",   verim: 95, tur: "nektar", gddMin: 350, gddMax: 520 },
      { ay: "Mayıs",   bitki: "Kekik / Hayıt",       verim: 85, tur: "nektar", gddMin: 530, gddMax: 720 },
      { ay: "Haziran", bitki: "Pamuk / Dağ Çiçeği",  verim: 80, tur: "nektar", gddMin: 730, gddMax: 950 },
      { ay: "Temmuz",  bitki: "Pamuk Zirve",         verim: 90, tur: "nektar", gddMin: 960, gddMax: 1180 },
      { ay: "Ağustos", bitki: "Kurak Geçiş",         verim: 40, tur: "kıtlık", gddMin: 1190, gddMax: 1400 },
      { ay: "Eylül",   bitki: "Güz Florası",         verim: 50, tur: "polen",  gddMin: 1410, gddMax: 1600 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 20, tur: "kıtlık", gddMin: 1610, gddMax: 1750 }
    ]
  },
  "osmaniye": {
    flora: "Akdeniz/G.Doğu Geçiş – Narenciye, Ayçiçeği, Çam, Yerfıstığı",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 330, nektarZirve: 680, nektarBitis: 1050 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye",           verim: 90, tur: "nektar", gddMin: 160, gddMax: 300 },
      { ay: "Nisan",   bitki: "Narenciye / Bahar",   verim: 95, tur: "nektar", gddMin: 310, gddMax: 480 },
      { ay: "Mayıs",   bitki: "Ayçiçeği / Kekik",    verim: 85, tur: "nektar", gddMin: 490, gddMax: 670 },
      { ay: "Haziran", bitki: "Çam / Dağ (Amanoslar)",verim:80, tur: "salgı",  gddMin: 680, gddMax: 890 },
      { ay: "Temmuz",  bitki: "Yerfıstığı / Pamuk",  verim: 75, tur: "nektar", gddMin: 900, gddMax: 1100 },
      { ay: "Ağustos", bitki: "Sıcak/Kurak",         verim: 40, tur: "kıtlık", gddMin: 1110, gddMax: 1320 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 50, tur: "polen",  gddMin: 1330, gddMax: 1520 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 20, tur: "kıtlık", gddMin: 1530, gddMax: 1680 }
    ]
  },
  "kahramanmaraş": {
    flora: "Akdeniz/Doğu Geçiş – Çam, Kekik, Geven, Ayçiçeği",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 290, nektarZirve: 590, nektarBitis: 930 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Badem",         verim: 60, tur: "polen",  gddMin: 120, gddMax: 220 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 80, tur: "nektar", gddMin: 230, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Kekik / Akasya",      verim: 85, tur: "nektar", gddMin: 410, gddMax: 580 },
      { ay: "Haziran", bitki: "Geven / Sedir",       verim: 95, tur: "nektar", gddMin: 590, gddMax: 790 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Yayla",    verim: 90, tur: "nektar", gddMin: 800, gddMax: 1000 },
      { ay: "Ağustos", bitki: "Kuraklık / Yüksekler",verim: 50, tur: "nektar", gddMin: 1010, gddMax: 1200 },
      { ay: "Eylül",   bitki: "Çam (Kısmi) / Püren", verim: 65, tur: "salgı",  gddMin: 1210, gddMax: 1380 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 20, tur: "kıtlık", gddMin: 1390, gddMax: 1500 }
    ]
  },
  "isparta": {
    flora: "Göller Yöresi – Gül, Lavanta, Sedir, Kekik, Yayla Geveni",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 550, nektarBitis: 880 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 40, tur: "polen",  gddMin: 100, gddMax: 190 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "polen",  gddMin: 200, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Gül (Yağ gülü) / Akasya",verim:80,tur:"nektar", gddMin: 370, gddMax: 530 },
      { ay: "Haziran", bitki: "Lavanta / Kekik / Sedir",verim:95,tur:"nektar", gddMin: 540, gddMax: 740 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",       verim: 90, tur: "nektar", gddMin: 750, gddMax: 940 },
      { ay: "Ağustos", bitki: "Otsu Kuraklık",       verim: 35, tur: "kıtlık", gddMin: 950, gddMax: 1120 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 45, tur: "polen",  gddMin: 1130, gddMax: 1280 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1290, gddMax: 1400 }
    ]
  },
  "burdur": {
    flora: "Göller Yöresi – Kekik, Lavanta, Geven, Anason",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 270, nektarZirve: 550, nektarBitis: 880 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Polen",       verim: 45, tur: "polen",  gddMin: 100, gddMax: 190 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "nektar", gddMin: 200, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Akasya / Haşhaş",     verim: 80, tur: "nektar", gddMin: 370, gddMax: 530 },
      { ay: "Haziran", bitki: "Lavanta / Anason",    verim: 95, tur: "nektar", gddMin: 540, gddMax: 740 },
      { ay: "Temmuz",  bitki: "Geven / Yayla Kekiği",verim: 90, tur: "nektar", gddMin: 750, gddMax: 940 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 950, gddMax: 1120 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 40, tur: "polen",  gddMin: 1130, gddMax: 1280 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1290, gddMax: 1400 }
    ]
  },

  // ====================== İÇ ANADOLU BÖLGESİ ======================
  "ankara": {
    flora: "Bozkır – Korunga, Kekik, Geven, Ayçiçeği",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Çiğdem",      verim: 40, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Yabani Hardal",verim:75, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Korunga",    verim: 85, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Yonca / Adaçayı",     verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Kekik / Ayçiçeği / Geven",verim:85,tur:"nektar",gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kuraklık / Geven Son",verim: 35, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 40, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "konya": {
    flora: "Geniş Bozkır – Yonca, Ayçiçeği, Geven, Kekik, Lavanta",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 520, nektarBitis: 840 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 35, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve / Tarla Çiçekleri",verim:70,tur:"polen",  gddMin: 190, gddMax: 340 },
      { ay: "Mayıs",   bitki: "Akasya / Korunga",    verim: 80, tur: "nektar", gddMin: 350, gddMax: 510 },
      { ay: "Haziran", bitki: "Yonca / Kekik / Lavanta",verim:95,tur:"nektar", gddMin: 520, gddMax: 720 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve / Geven",verim:98,tur: "nektar", gddMin: 730, gddMax: 920 },
      { ay: "Ağustos", bitki: "Sıcak ve Kurak Dönem",verim: 25, tur: "kıtlık", gddMin: 930, gddMax: 1110 },
      { ay: "Eylül",   bitki: "Pıtrak / Güz Poleni", verim: 35, tur: "polen",  gddMin: 1120, gddMax: 1260 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1270, gddMax: 1350 }
    ]
  },
  "kayseri": {
    flora: "Erciyes ve Yüksek Bozkır – Geven, Kekik, Yüksek Yayla",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 230, nektarZirve: 480, nektarBitis: 780 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Kalkması (Uyku)", verim: 10, tur: "kıtlık", gddMin: 50,  gddMax: 120 },
      { ay: "Nisan",   bitki: "Çiğdem / Söğüt",      verim: 60, tur: "polen",  gddMin: 130, gddMax: 270 },
      { ay: "Mayıs",   bitki: "Meyve / Korunga",     verim: 85, tur: "nektar", gddMin: 280, gddMax: 430 },
      { ay: "Haziran", bitki: "Kekik / Dağ Florası", verim: 95, tur: "nektar", gddMin: 440, gddMax: 630 },
      { ay: "Temmuz",  bitki: "Geven Zirve",         verim: 98, tur: "nektar", gddMin: 640, gddMax: 840 },
      { ay: "Ağustos", bitki: "Geven Son / Yayla",   verim: 60, tur: "nektar", gddMin: 850, gddMax: 1020 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 35, tur: "polen",  gddMin: 1030, gddMax: 1150 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 5,  tur: "kıtlık", gddMin: 1160, gddMax: 1250 }
    ]
  },
  "sivas": {
    flora: "İç / Doğu Geçişi – Ünlü Sivas Balı, Yoğun Geven, Kekik, Yayla",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 460, nektarBitis: 750 },
    timeline: [
      { ay: "Mart",    bitki: "Soğuk Dönem",         verim: 5,  tur: "kıtlık", gddMin: 40,  gddMax: 100 },
      { ay: "Nisan",   bitki: "Erken Polen / Çiğdem",verim: 50, tur: "polen",  gddMin: 110, gddMax: 240 },
      { ay: "Mayıs",   bitki: "Meyve / Karaçalı",    verim: 80, tur: "nektar", gddMin: 250, gddMax: 390 },
      { ay: "Haziran", bitki: "Yayla Çiçekleri / Kekik",verim:95,tur:"nektar", gddMin: 400, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Geven Zirve",         verim: 100,tur: "nektar", gddMin: 610, gddMax: 810 },
      { ay: "Ağustos", bitki: "Geven Son / Otsular", verim: 70, tur: "nektar", gddMin: 820, gddMax: 990 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 30, tur: "polen",  gddMin: 1000, gddMax: 1120 },
      { ay: "Ekim",    bitki: "Erken Kışa Hazırlık", verim: 5,  tur: "kıtlık", gddMin: 1130, gddMax: 1210 }
    ]
  },
  "eskişehir": {
    flora: "Geçiş Bozkır – Ayçiçeği, Kekik, Korunga, Yonca",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Polen",       verim: 45, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Korunga",    verim: 85, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Yonca / Kekik",       verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve",      verim: 95, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Güz Çiçekleri",       verim: 40, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "nevşehir": {
    flora: "Kapadokya – Kabak(Çekirdek), Yonca, Kekik, Geven",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 810 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 35, tur: "polen",  gddMin: 80,  gddMax: 160 },
      { ay: "Nisan",   bitki: "Meyve / İğde",        verim: 70, tur: "polen",  gddMin: 170, gddMax: 320 },
      { ay: "Mayıs",   bitki: "İğde / Akasya",       verim: 85, tur: "nektar", gddMin: 330, gddMax: 480 },
      { ay: "Haziran", bitki: "Yonca / Kekik",       verim: 90, tur: "nektar", gddMin: 490, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Kabak Çiçeği / Geven",verim:85, tur: "nektar", gddMin: 690, gddMax: 880 },
      { ay: "Ağustos", bitki: "Kuraklık",            verim: 30, tur: "kıtlık", gddMin: 890, gddMax: 1070 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 35, tur: "polen",  gddMin: 1080, gddMax: 1220 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1230, gddMax: 1320 }
    ]
  },
  "niğde": {
    flora: "Toros Arkası – Elma, Kiraz, Geven, Yüksek Yayla",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 810 },
    timeline: [
      { ay: "Mart",    bitki: "Soğuk / Uyanış",      verim: 20, tur: "kıtlık", gddMin: 70,  gddMax: 150 },
      { ay: "Nisan",   bitki: "Meyve (Elma/Kiraz)",  verim: 85, tur: "polen",  gddMin: 160, gddMax: 310 },
      { ay: "Mayıs",   bitki: "Meyve Zirve / Akasya",verim: 80, tur: "nektar", gddMin: 320, gddMax: 470 },
      { ay: "Haziran", bitki: "Kekik / Dağ Çiçeği",  verim: 90, tur: "nektar", gddMin: 480, gddMax: 670 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",       verim: 95, tur: "nektar", gddMin: 680, gddMax: 870 },
      { ay: "Ağustos", bitki: "Geven Son / Kuraklık",verim: 40, tur: "kıtlık", gddMin: 880, gddMax: 1060 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 35, tur: "polen",  gddMin: 1070, gddMax: 1210 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1220, gddMax: 1300 }
    ]
  },
  "aksaray": {
    flora: "Hasandağı Etekleri – Yonca, Ayçiçeği, Geven",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 30, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Kır Çiçeği",  verim: 70, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Yonca",      verim: 85, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Yonca / Kekik",       verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Geven",    verim: 95, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 25, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 35, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "karaman": {
    flora: "Bozkır / Toros Etekleri – Elma, Kekik, Geven",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Uyanış",        verim: 25, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Elma (Yoğun Meyve)",  verim: 90, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Kekik",      verim: 80, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Yonca / Dağ Kekiği",  verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",       verim: 85, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kuraklık",            verim: 30, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Güz Florası",         verim: 35, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "kırıkkale": {
    flora: "Kızılırmak Havzası – Ayçiçeği, Yonca, Kekik",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt",               verim: 40, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Hardal",      verim: 75, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Kır Çiçeği", verim: 80, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Yonca / Kekik",       verim: 85, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve",      verim: 95, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kurak",               verim: 25, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 35, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "kırşehir": {
    flora: "Bozkır – Geven, Kekik, Yonca",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 30, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 70, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Korunga",    verim: 80, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Yonca / Kekik",       verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Geven Zirve",         verim: 95, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kuraklık",            verim: 30, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 35, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "çankırı": {
    flora: "İç Anadolu / Karadeniz Geçiş – Orman Altı, Kekik, Geven",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 810 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Polen",       verim: 40, tur: "polen",  gddMin: 80,  gddMax: 160 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 75, tur: "polen",  gddMin: 170, gddMax: 320 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 85, tur: "nektar", gddMin: 330, gddMax: 480 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 90, tur: "nektar", gddMin: 490, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Geven / Orman",       verim: 85, tur: "nektar", gddMin: 690, gddMax: 880 },
      { ay: "Ağustos", bitki: "Kurak Geçiş",         verim: 35, tur: "kıtlık", gddMin: 890, gddMax: 1070 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 40, tur: "polen",  gddMin: 1080, gddMax: 1220 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1230, gddMax: 1320 }
    ]
  },
  "yozgat": {
    flora: "Bozok Yaylası – Geven, Kekik, Çiçek Balı",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 470, nektarBitis: 770 },
    timeline: [
      { ay: "Mart",    bitki: "Soğuk Dönem",         verim: 10, tur: "kıtlık", gddMin: 60,  gddMax: 130 },
      { ay: "Nisan",   bitki: "Çiğdem / Erken Meyve",verim: 55, tur: "polen",  gddMin: 140, gddMax: 280 },
      { ay: "Mayıs",   bitki: "Meyve / Akasya",      verim: 80, tur: "nektar", gddMin: 290, gddMax: 440 },
      { ay: "Haziran", bitki: "Kekik / Yayla",       verim: 95, tur: "nektar", gddMin: 450, gddMax: 640 },
      { ay: "Temmuz",  bitki: "Geven Zirve",         verim: 98, tur: "nektar", gddMin: 650, gddMax: 850 },
      { ay: "Ağustos", bitki: "Geven Son / Kurak",   verim: 40, tur: "kıtlık", gddMin: 860, gddMax: 1030 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 35, tur: "polen",  gddMin: 1040, gddMax: 1170 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1180, gddMax: 1270 }
    ]
  },

  // ====================== KARADENİZ BÖLGESİ ======================
  "ordu": {
    flora: "Orta/Doğu Karadeniz – Kestane, Orman Gülü, Fındık, Yayla",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Fındık Poleni",       verim: 75, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve / Taflan (Karayemiş)",verim:85,tur:"nektar", gddMin: 190, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Orman Gülü(Komar)",verim:90,tur:"nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 98, tur: "nektar", gddMin: 500, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Çamaş / Yüksek Yayla",verim: 90, tur: "nektar", gddMin: 710, gddMax: 900 },
      { ay: "Ağustos", bitki: "Yayla Devam",         verim: 75, tur: "nektar", gddMin: 910, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 50, tur: "polen",  gddMin: 1090, gddMax: 1240 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1250, gddMax: 1350 }
    ]
  },
  "giresun": {
    flora: "Doğu Karadeniz – Kestane, Fındık, Komar, Yüksek Yayla",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 810 },
    timeline: [
      { ay: "Mart",    bitki: "Fındık Poleni",       verim: 70, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Taflan / Kiraz",      verim: 85, tur: "nektar", gddMin: 180, gddMax: 320 },
      { ay: "Mayıs",   bitki: "Orman Gülü (Komar)",  verim: 95, tur: "nektar", gddMin: 330, gddMax: 480 },
      { ay: "Haziran", bitki: "Kestane Zirve",       verim: 100,tur: "nektar", gddMin: 490, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri",     verim: 95, tur: "nektar", gddMin: 690, gddMax: 880 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Zirve",  verim: 80, tur: "nektar", gddMin: 890, gddMax: 1070 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 40, tur: "polen",  gddMin: 1080, gddMax: 1220 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1230, gddMax: 1320 }
    ]
  },
  "trabzon": {
    flora: "Doğu Karadeniz – Kestane, Komar, Yüksek Yayla Florası",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 810 },
    timeline: [
      { ay: "Mart",    bitki: "Fındık Poleni",       verim: 65, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Taflan / Kızılağaç",  verim: 80, tur: "nektar", gddMin: 180, gddMax: 320 },
      { ay: "Mayıs",   bitki: "Orman Gülü / Akasya", verim: 90, tur: "nektar", gddMin: 330, gddMax: 480 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 98, tur: "nektar", gddMin: 490, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Kadırga/Yayla Çiçekleri",verim:95,tur:"nektar", gddMin: 690, gddMax: 880 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Devam",  verim: 85, tur: "nektar", gddMin: 890, gddMax: 1070 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 45, tur: "polen",  gddMin: 1080, gddMax: 1220 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1230, gddMax: 1320 }
    ]
  },
  "rize": {
    flora: "Dünya Markası Anzer & Ayder Yaylaları – Kestane, Komar, Endemik",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 480, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 50, tur: "polen",  gddMin: 80,  gddMax: 150 },
      { ay: "Nisan",   bitki: "Taflan / Orman Altı", verim: 75, tur: "nektar", gddMin: 160, gddMax: 300 },
      { ay: "Mayıs",   bitki: "Deli Bal(Komar)",     verim: 95, tur: "nektar", gddMin: 310, gddMax: 460 },
      { ay: "Haziran", bitki: "Kestane Zirve",       verim: 98, tur: "nektar", gddMin: 470, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Anzer / Yüksek Yayla",verim: 100,tur: "nektar", gddMin: 660, gddMax: 850 },
      { ay: "Ağustos", bitki: "Endemik Türler Zirve",verim: 95, tur: "nektar", gddMin: 860, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Yayla Sonbahar",      verim: 50, tur: "polen",  gddMin: 1060, gddMax: 1200 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1210, gddMax: 1300 }
    ]
  },
  "artvin": {
    flora: "Macahel Biyosfer Rezervi – Kestane, Kafkas Arısı, Endemik Flora",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 480, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Uyanış / Polen",      verim: 40, tur: "polen",  gddMin: 80,  gddMax: 150 },
      { ay: "Nisan",   bitki: "Meyve / Kızılağaç",   verim: 70, tur: "nektar", gddMin: 160, gddMax: 300 },
      { ay: "Mayıs",   bitki: "Komar / Akasya",      verim: 90, tur: "nektar", gddMin: 310, gddMax: 460 },
      { ay: "Haziran", bitki: "Kestane Zirve",       verim: 100,tur: "nektar", gddMin: 470, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Macahel Yayla Çiçekleri",verim:100,tur:"nektar",gddMin: 660, gddMax: 850 },
      { ay: "Ağustos", bitki: "Yüksek Dağ Florası",  verim: 90, tur: "nektar", gddMin: 860, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 50, tur: "polen",  gddMin: 1060, gddMax: 1200 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1210, gddMax: 1300 }
    ]
  },
  "samsun": {
    flora: "Orta Karadeniz / Bafra-Çarşamba – Ayçiçeği, Kestane, Orman",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 530, nektarBitis: 830 },
    timeline: [
      { ay: "Mart",    bitki: "Fındık / Söğüt",      verim: 65, tur: "polen",  gddMin: 110, gddMax: 200 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 80, tur: "nektar", gddMin: 210, gddMax: 380 },
      { ay: "Mayıs",   bitki: "Akasya / Orman",      verim: 85, tur: "nektar", gddMin: 390, gddMax: 540 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 95, tur: "nektar", gddMin: 550, gddMax: 740 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve",      verim: 95, tur: "nektar", gddMin: 750, gddMax: 930 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 35, tur: "kıtlık", gddMin: 940, gddMax: 1120 },
      { ay: "Eylül",   bitki: "Güz Çiçekleri",       verim: 45, tur: "polen",  gddMin: 1130, gddMax: 1270 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1280, gddMax: 1370 }
    ]
  },
  "sinop": {
    flora: "Karadeniz – Kestane, Orman Gülü, Çam, Yayla",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 810 },
    timeline: [
      { ay: "Mart",    bitki: "Orman Altı Polen",    verim: 55, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 75, tur: "nektar", gddMin: 190, gddMax: 340 },
      { ay: "Mayıs",   bitki: "Akasya / Komar",      verim: 85, tur: "nektar", gddMin: 350, gddMax: 490 },
      { ay: "Haziran", bitki: "Kestane Zirve",       verim: 98, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri",     verim: 85, tur: "nektar", gddMin: 700, gddMax: 880 },
      { ay: "Ağustos", bitki: "Kestane Balı Kesimi", verim: 40, tur: "kıtlık", gddMin: 890, gddMax: 1070 },
      { ay: "Eylül",   bitki: "Sonbahar Florası",    verim: 40, tur: "polen",  gddMin: 1080, gddMax: 1220 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1230, gddMax: 1320 }
    ]
  },
  "kastamonu": {
    flora: "Batı Karadeniz – Kestane, Ihlamur, Orman, Çam",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Soğuk Uyanış",        verim: 30, tur: "polen",  gddMin: 80,  gddMax: 160 },
      { ay: "Nisan",   bitki: "Meyve / Orman Altı",  verim: 70, tur: "nektar", gddMin: 170, gddMax: 320 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 85, tur: "nektar", gddMin: 330, gddMax: 480 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 95, tur: "nektar", gddMin: 490, gddMax: 680 },
      { ay: "Temmuz",  bitki: "Yayla / Kekik / Geven",verim:90, tur: "nektar", gddMin: 690, gddMax: 870 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 35, tur: "kıtlık", gddMin: 880, gddMax: 1050 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 40, tur: "polen",  gddMin: 1060, gddMax: 1200 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1210, gddMax: 1300 }
    ]
  },
  "zonguldak": {
    flora: "Batı Karadeniz Kestane Ormanları – Kestane, Ihlamur",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 520, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Orman Altı / Fındık", verim: 60, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve / Bahar Çiçeği",verim: 75, tur: "nektar", gddMin: 190, gddMax: 350 },
      { ay: "Mayıs",   bitki: "Akasya / Orman",      verim: 90, tur: "nektar", gddMin: 360, gddMax: 500 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 100,tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Orman Gülü / Böğürtlen",verim:75,tur:"nektar", gddMin: 710, gddMax: 900 },
      { ay: "Ağustos", bitki: "Sıcak Dönem",         verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 45, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "bartın": {
    flora: "Batı Karadeniz – Kestane, Ihlamur, Akasya, Orman Altı",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 520, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 55, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "nektar", gddMin: 190, gddMax: 350 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 90, tur: "nektar", gddMin: 360, gddMax: 500 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 100,tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Böğürtlen / Otsu",    verim: 70, tur: "nektar", gddMin: 710, gddMax: 900 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Güz Florası",         verim: 40, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "karabük": {
    flora: "Batı Karadeniz İç – Kestane, Çam, Yayla, Orman",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 40, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Orman Altı",  verim: 75, tur: "nektar", gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Çayır",      verim: 85, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Kestane Zirve",       verim: 95, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri",     verim: 85, tur: "nektar", gddMin: 700, gddMax: 880 },
      { ay: "Ağustos", bitki: "Çam Salgısı Kısmi",   verim: 60, tur: "salgı",  gddMin: 890, gddMax: 1060 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 40, tur: "polen",  gddMin: 1070, gddMax: 1210 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1220, gddMax: 1300 }
    ]
  },
  "bolu": {
    flora: "Batı Karadeniz – Çam, Kestane, Ihlamur, Yüksek Yayla",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 500, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Kardelen / Erken Polen",verim:40,tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Orman Çiçekleri",verim:75,tur:"nektar", gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya",              verim: 85, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 95, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Yayla Çiçekleri / Kekik",verim:90,tur:"nektar", gddMin: 700, gddMax: 880 },
      { ay: "Ağustos", bitki: "Yayla Devam / Çam",   verim: 60, tur: "nektar", gddMin: 890, gddMax: 1060 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 40, tur: "polen",  gddMin: 1070, gddMax: 1210 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1220, gddMax: 1300 }
    ]
  },
  "düzce": {
    flora: "Batı Karadeniz – Kestane, Fındık, Ihlamur, Akasya",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 520, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Fındık Poleni",       verim: 60, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "nektar", gddMin: 190, gddMax: 350 },
      { ay: "Mayıs",   bitki: "Akasya / Orman",      verim: 90, tur: "nektar", gddMin: 360, gddMax: 500 },
      { ay: "Haziran", bitki: "Kestane / Ihlamur",   verim: 100,tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Böğürtlen / Otsular", verim: 70, tur: "nektar", gddMin: 710, gddMax: 900 },
      { ay: "Ağustos", bitki: "Kurak Geçiş",         verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 40, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "çorum": {
    flora: "İç Anadolu/Karadeniz Geçiş – Ayçiçeği, Kekik, Korunga",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 40, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 75, tur: "polen",  gddMin: 180, gddMax: 330 },
      { ay: "Mayıs",   bitki: "Akasya / Korunga",    verim: 85, tur: "nektar", gddMin: 340, gddMax: 490 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Ayçiçeği Zirve",      verim: 95, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 35, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "amasya": {
    flora: "Karadeniz Arkası – Elma Zirvesi, Kestane, Kekik",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 520, nektarBitis: 830 },
    timeline: [
      { ay: "Mart",    bitki: "Söğüt / Polen",       verim: 45, tur: "polen",  gddMin: 100, gddMax: 180 },
      { ay: "Nisan",   bitki: "Elma Meyvesi (Yoğun)",verim: 95, tur: "polen",  gddMin: 190, gddMax: 350 },
      { ay: "Mayıs",   bitki: "Akasya / Kiraz",      verim: 85, tur: "nektar", gddMin: 360, gddMax: 500 },
      { ay: "Haziran", bitki: "Kestane / Yonca",     verim: 90, tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Temmuz",  bitki: "Kekik / Ayçiçeği",    verim: 85, tur: "nektar", gddMin: 710, gddMax: 900 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1090 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 40, tur: "polen",  gddMin: 1100, gddMax: 1240 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1250, gddMax: 1340 }
    ]
  },
  "tokat": {
    flora: "Karadeniz/İç Anadolu Geçiş – Orman Altı, Kekik, Ayçiçeği",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 250, nektarZirve: 510, nektarBitis: 820 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 40, tur: "polen",  gddMin: 90,  gddMax: 170 },
      { ay: "Nisan",   bitki: "Meyve / Hardal",      verim: 80, tur: "polen",  gddMin: 180, gddMax: 340 },
      { ay: "Mayıs",   bitki: "Akasya / Çayır",      verim: 85, tur: "nektar", gddMin: 350, gddMax: 490 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 90, tur: "nektar", gddMin: 500, gddMax: 690 },
      { ay: "Temmuz",  bitki: "Ayçiçeği / Yayla",    verim: 90, tur: "nektar", gddMin: 700, gddMax: 890 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Kısmi",  verim: 50, tur: "nektar", gddMin: 900, gddMax: 1080 },
      { ay: "Eylül",   bitki: "Güz Çiçekleri",       verim: 40, tur: "polen",  gddMin: 1090, gddMax: 1230 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1240, gddMax: 1330 }
    ]
  },
  "gümüşhane": {
    flora: "Doğu Karadeniz İç – Kuşburnu, Kekik, Geven, Yüksek Yayla",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 480, nektarBitis: 790 },
    timeline: [
      { ay: "Mart",    bitki: "Soğuk Uyanış",        verim: 15, tur: "kıtlık", gddMin: 60,  gddMax: 130 },
      { ay: "Nisan",   bitki: "Çiğdem / Polen",      verim: 50, tur: "polen",  gddMin: 140, gddMax: 280 },
      { ay: "Mayıs",   bitki: "Meyve / Kuşburnu",    verim: 80, tur: "nektar", gddMin: 290, gddMax: 440 },
      { ay: "Haziran", bitki: "Yayla / Kekik / Korunga",verim:95,tur:"nektar", gddMin: 450, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven / Endemik",     verim: 100,tur:"nektar",  gddMin: 660, gddMax: 850 },
      { ay: "Ağustos", bitki: "Yayla Devam",         verim: 75, tur: "nektar", gddMin: 860, gddMax: 1030 },
      { ay: "Eylül",   bitki: "Sonbahar Florası",    verim: 40, tur: "polen",  gddMin: 1040, gddMax: 1180 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1190, gddMax: 1280 }
    ]
  },
  "bayburt": {
    flora: "Doğu Karadeniz/Doğu Anadolu Geçiş – Yüksek Yayla, Geven, Korunga",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 460, nektarBitis: 760 },
    timeline: [
      { ay: "Mart",    bitki: "Kış Uykusu",          verim: 0,  tur: "kıtlık", gddMin: 40,  gddMax: 100 },
      { ay: "Nisan",   bitki: "Kardelen / Erken Polen",verim: 40,tur:"polen",  gddMin: 110, gddMax: 230 },
      { ay: "Mayıs",   bitki: "Meyve / Çayır",       verim: 75, tur: "nektar", gddMin: 240, gddMax: 380 },
      { ay: "Haziran", bitki: "Korunga / Yayla",     verim: 90, tur: "nektar", gddMin: 390, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Geven Zirvesi",       verim: 100,tur:"nektar",  gddMin: 610, gddMax: 810 },
      { ay: "Ağustos", bitki: "Otsular / Yayla Son", verim: 65, tur: "nektar", gddMin: 820, gddMax: 1000 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 30, tur: "polen",  gddMin: 1010, gddMax: 1140 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 5,  tur: "kıtlık", gddMin: 1150, gddMax: 1230 }
    ]
  },

  // ====================== DOĞU ANADOLU BÖLGESİ ======================
  "erzurum": {
    flora: "Yüksek Yayla – Geven, Kekik, Korunga, Üçgül, Endemik",
    baseTemp: 5, gdd: { ciceklenmeBaslangic: 200, nektarZirve: 450, nektarBitis: 750 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Altında",         verim: 0,  tur: "kıtlık", gddMin: 20,  gddMax: 80 },
      { ay: "Nisan",   bitki: "Kar Kalkması / Polen",verim: 30, tur: "polen",  gddMin: 90,  gddMax: 200 },
      { ay: "Mayıs",   bitki: "Çayır / Korunga Başlangıç",verim: 70,tur:"nektar",gddMin: 210, gddMax: 350 },
      { ay: "Haziran", bitki: "Korunga / Üçgül / Yayla",verim: 95,tur:"nektar",gddMin: 360, gddMax: 580 },
      { ay: "Temmuz",  bitki: "Geven / Endemik Zirve",verim: 100,tur:"nektar", gddMin: 590, gddMax: 800 },
      { ay: "Ağustos", bitki: "Yüksek Rakım Geveni", verim: 85, tur: "nektar", gddMin: 810, gddMax: 1000 },
      { ay: "Eylül",   bitki: "Hızlı Soğuma / Polen",verim: 25, tur: "polen",  gddMin: 1010, gddMax: 1130 },
      { ay: "Ekim",    bitki: "Sert Kışa Giriş",     verim: 5,  tur: "kıtlık", gddMin: 1140, gddMax: 1200 }
    ]
  },
  "kars": {
    flora: "Kafkas Arısı Gen Merkezi – Korunga, Geven, Alpin Çayırları",
    baseTemp: 5, gdd: { ciceklenmeBaslangic: 200, nektarZirve: 460, nektarBitis: 760 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Altında",         verim: 0,  tur: "kıtlık", gddMin: 20,  gddMax: 80 },
      { ay: "Nisan",   bitki: "Erken Polen",         verim: 25, tur: "polen",  gddMin: 90,  gddMax: 190 },
      { ay: "Mayıs",   bitki: "Çayır Çiçekleri",     verim: 65, tur: "nektar", gddMin: 200, gddMax: 340 },
      { ay: "Haziran", bitki: "Korunga / Yayla Başlangıç",verim: 90,tur:"nektar",gddMin: 350, gddMax: 570 },
      { ay: "Temmuz",  bitki: "Geven / Alpin Zirvesi",verim: 100,tur:"nektar", gddMin: 580, gddMax: 810 },
      { ay: "Ağustos", bitki: "Yayla Çiçekleri Devam",verim: 85, tur: "nektar", gddMin: 820, gddMax: 1020 },
      { ay: "Eylül",   bitki: "Soğuma / Güz Poleni", verim: 25, tur: "polen",  gddMin: 1030, gddMax: 1140 },
      { ay: "Ekim",    bitki: "Kış Uykusuna Giriş",  verim: 5,  tur: "kıtlık", gddMin: 1150, gddMax: 1220 }
    ]
  },
  "ardahan": {
    flora: "Yüksek Kafkas Yaylası – Geven, Üçgül, Çayır Çiçekleri",
    baseTemp: 4, gdd: { ciceklenmeBaslangic: 180, nektarZirve: 430, nektarBitis: 730 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Kaplı",           verim: 0,  tur: "kıtlık", gddMin: 10,  gddMax: 60 },
      { ay: "Nisan",   bitki: "Uyanış",              verim: 15, tur: "polen",  gddMin: 70,  gddMax: 160 },
      { ay: "Mayıs",   bitki: "Çayır Çiçekleri",     verim: 60, tur: "polen",  gddMin: 170, gddMax: 300 },
      { ay: "Haziran", bitki: "Yayla Çiçeklenmesi",  verim: 85, tur: "nektar", gddMin: 310, gddMax: 530 },
      { ay: "Temmuz",  bitki: "Geven / Üçgül Zirve", verim: 98, tur: "nektar", gddMin: 540, gddMax: 780 },
      { ay: "Ağustos", bitki: "Yüksek Rakım Çiçekleri",verim:85,tur: "nektar", gddMin: 790, gddMax: 970 },
      { ay: "Eylül",   bitki: "Erken Soğuma",        verim: 20, tur: "polen",  gddMin: 980, gddMax: 1090 },
      { ay: "Ekim",    bitki: "Kış Uykusu",          verim: 0,  tur: "kıtlık", gddMin: 1100, gddMax: 1160 }
    ]
  },
  "ığdır": {
    flora: "Mikroklima Çukuru – Meyve, Yonca, Kayısı, Geven",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 530, nektarBitis: 840 },
    timeline: [
      { ay: "Mart",    bitki: "Kayısı / Erken Meyve",verim: 80, tur: "polen",  gddMin: 110, gddMax: 220 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 85, tur: "nektar", gddMin: 230, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Akasya / Çayır",      verim: 80, tur: "nektar", gddMin: 410, gddMax: 560 },
      { ay: "Haziran", bitki: "Yonca / Kekik",       verim: 90, tur: "nektar", gddMin: 570, gddMax: 750 },
      { ay: "Temmuz",  bitki: "Geven / Kavun-Karpuz",verim: 85, tur: "nektar", gddMin: 760, gddMax: 950 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 35, tur: "kıtlık", gddMin: 960, gddMax: 1130 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 40, tur: "polen",  gddMin: 1140, gddMax: 1280 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1290, gddMax: 1380 }
    ]
  },
  "ağrı": {
    flora: "Yüksek Doğu – Geven, Korunga, Kekik, Alpin Yayla",
    baseTemp: 5, gdd: { ciceklenmeBaslangic: 200, nektarZirve: 450, nektarBitis: 750 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Altında",         verim: 0,  tur: "kıtlık", gddMin: 20,  gddMax: 80 },
      { ay: "Nisan",   bitki: "Kardelen / Polen",    verim: 25, tur: "polen",  gddMin: 90,  gddMax: 200 },
      { ay: "Mayıs",   bitki: "Çayır Çiçekleri",     verim: 65, tur: "nektar", gddMin: 210, gddMax: 350 },
      { ay: "Haziran", bitki: "Korunga / Yayla",     verim: 90, tur: "nektar", gddMin: 360, gddMax: 580 },
      { ay: "Temmuz",  bitki: "Geven Zirvesi",       verim: 100,tur: "nektar", gddMin: 590, gddMax: 800 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Çiçeği", verim: 85, tur: "nektar", gddMin: 810, gddMax: 1000 },
      { ay: "Eylül",   bitki: "Erken Soğuma",        verim: 20, tur: "polen",  gddMin: 1010, gddMax: 1130 },
      { ay: "Ekim",    bitki: "Kış Uykusu",          verim: 5,  tur: "kıtlık", gddMin: 1140, gddMax: 1200 }
    ]
  },
  "van": {
    flora: "Van Gölü Havzası – Geven (Çatak), Üçgül, Kekik",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 470, nektarBitis: 770 },
    timeline: [
      { ay: "Mart",    bitki: "Soğuk / Uyanış",      verim: 15, tur: "kıtlık", gddMin: 30,  gddMax: 100 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları (Kısmi)",verim: 60,tur:"polen",  gddMin: 110, gddMax: 230 },
      { ay: "Mayıs",   bitki: "Çayır / Korunga",     verim: 80, tur: "nektar", gddMin: 240, gddMax: 390 },
      { ay: "Haziran", bitki: "Kekik / Yayla",       verim: 95, tur: "nektar", gddMin: 400, gddMax: 610 },
      { ay: "Temmuz",  bitki: "Geven Zirve (Çatak)", verim: 100,tur:"nektar",  gddMin: 620, gddMax: 820 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Devam",  verim: 85, tur: "nektar", gddMin: 830, gddMax: 1010 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 35, tur: "polen",  gddMin: 1020, gddMax: 1150 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1160, gddMax: 1240 }
    ]
  },
  "bitlis": {
    flora: "Yüksek Doğu – Karakovan Balı, Geven, Endemik Yayla",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 470, nektarBitis: 770 },
    timeline: [
      { ay: "Mart",    bitki: "Kış Şartları",        verim: 5,  tur: "kıtlık", gddMin: 30,  gddMax: 100 },
      { ay: "Nisan",   bitki: "Kardelen / Erken Polen",verim:40,tur: "polen",  gddMin: 110, gddMax: 230 },
      { ay: "Mayıs",   bitki: "Meyve / Çayır",       verim: 75, tur: "nektar", gddMin: 240, gddMax: 390 },
      { ay: "Haziran", bitki: "Yayla / Dağ Kekiği",  verim: 95, tur: "nektar", gddMin: 400, gddMax: 610 },
      { ay: "Temmuz",  bitki: "Geven / Karakovan Florası",verim:100,tur:"nektar",gddMin:620, gddMax: 820 },
      { ay: "Ağustos", bitki: "Endemik Türler",      verim: 85, tur: "nektar", gddMin: 830, gddMax: 1010 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 30, tur: "polen",  gddMin: 1020, gddMax: 1150 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1160, gddMax: 1240 }
    ]
  },
  "muş": {
    flora: "Muş Ovası & Yaylası – Geven, Yonca, Korunga",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 470, nektarBitis: 770 },
    timeline: [
      { ay: "Mart",    bitki: "Uyanış Öncesi",       verim: 10, tur: "kıtlık", gddMin: 30,  gddMax: 100 },
      { ay: "Nisan",   bitki: "Erken Meyve / Polen", verim: 50, tur: "polen",  gddMin: 110, gddMax: 230 },
      { ay: "Mayıs",   bitki: "Çayır / Korunga",     verim: 80, tur: "nektar", gddMin: 240, gddMax: 390 },
      { ay: "Haziran", bitki: "Yonca / Yayla",       verim: 95, tur: "nektar", gddMin: 400, gddMax: 610 },
      { ay: "Temmuz",  bitki: "Geven Zirvesi",       verim: 100,tur: "nektar", gddMin: 620, gddMax: 820 },
      { ay: "Ağustos", bitki: "Kurak Dönem Başlangıcı",verim:45, tur: "kıtlık",gddMin: 830, gddMax: 1010 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 30, tur: "polen",  gddMin: 1020, gddMax: 1150 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 5,  tur: "kıtlık", gddMin: 1160, gddMax: 1240 }
    ]
  },
  "bingöl": {
    flora: "Bingöl Yaylaları – Dünya Birincisi Bal Florası, Geven, Üçgül, Kekik",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 480, nektarBitis: 790 },
    timeline: [
      { ay: "Mart",    bitki: "Uyanış",              verim: 15, tur: "polen",  gddMin: 40,  gddMax: 110 },
      { ay: "Nisan",   bitki: "Çiğdem / Polen",      verim: 60, tur: "polen",  gddMin: 120, gddMax: 250 },
      { ay: "Mayıs",   bitki: "Meyve / Çayır",       verim: 85, tur: "nektar", gddMin: 260, gddMax: 410 },
      { ay: "Haziran", bitki: "Kekik / Üçgül / Yayla",verim:98, tur: "nektar", gddMin: 420, gddMax: 630 },
      { ay: "Temmuz",  bitki: "Geven / Endemik Çiçek",verim:100,tur:"nektar",  gddMin: 640, gddMax: 840 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Zirvesi",verim: 85, tur: "nektar", gddMin: 850, gddMax: 1030 },
      { ay: "Eylül",   bitki: "Güz Florası",         verim: 40, tur: "polen",  gddMin: 1040, gddMax: 1170 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1180, gddMax: 1260 }
    ]
  },
  "tunceli": {
    flora: "Munzur ve Pülümür – Geven, Kekik, Meşe, Yüksek Yayla",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 480, nektarBitis: 790 },
    timeline: [
      { ay: "Mart",    bitki: "Polen Uyanış",        verim: 20, tur: "polen",  gddMin: 40,  gddMax: 110 },
      { ay: "Nisan",   bitki: "Erken Bahar Çiçekleri",verim:65, tur: "polen",  gddMin: 120, gddMax: 250 },
      { ay: "Mayıs",   bitki: "Meyve / Meşe",        verim: 80, tur: "nektar", gddMin: 260, gddMax: 410 },
      { ay: "Haziran", bitki: "Dağ Kekiği / Yayla",  verim: 95, tur: "nektar", gddMin: 420, gddMax: 630 },
      { ay: "Temmuz",  bitki: "Geven Zirvesi",       verim: 100,tur: "nektar", gddMin: 640, gddMax: 840 },
      { ay: "Ağustos", bitki: "Munzur Yüksekleri",   verim: 80, tur: "nektar", gddMin: 850, gddMax: 1030 },
      { ay: "Eylül",   bitki: "Meşe Salgısı(Kısmi) / Polen",verim:50,tur:"salgı",gddMin: 1040, gddMax: 1170 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1180, gddMax: 1260 }
    ]
  },
  "erzincan": {
    flora: "Munzur/Keşiş Dağları – Geven, Kekik, Yonca",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 230, nektarZirve: 490, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Uyanış",        verim: 25, tur: "polen",  gddMin: 50,  gddMax: 130 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 75, tur: "polen",  gddMin: 140, gddMax: 280 },
      { ay: "Mayıs",   bitki: "Çayır / Korunga",     verim: 85, tur: "nektar", gddMin: 290, gddMax: 440 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 95, tur: "nektar", gddMin: 450, gddMax: 650 },
      { ay: "Temmuz",  bitki: "Geven Zirve",         verim: 100,tur: "nektar", gddMin: 660, gddMax: 860 },
      { ay: "Ağustos", bitki: "Yayla / Kurak",       verim: 60, tur: "nektar", gddMin: 870, gddMax: 1040 },
      { ay: "Eylül",   bitki: "Güz Çiçekleri",       verim: 40, tur: "polen",  gddMin: 1050, gddMax: 1180 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1190, gddMax: 1280 }
    ]
  },
  "malatya": {
    flora: "Doğu/İç Geçiş – Kayısı, Geven, Kekik, Yonca",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 530, nektarBitis: 840 },
    timeline: [
      { ay: "Mart",    bitki: "Kayısı (Erken Polen)",verim: 90, tur: "polen",  gddMin: 100, gddMax: 190 },
      { ay: "Nisan",   bitki: "Meyve / Hardal",      verim: 85, tur: "nektar", gddMin: 200, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Akasya / Çayır",      verim: 80, tur: "nektar", gddMin: 370, gddMax: 520 },
      { ay: "Haziran", bitki: "Kekik / Yonca",       verim: 95, tur: "nektar", gddMin: 530, gddMax: 730 },
      { ay: "Temmuz",  bitki: "Geven / Yayla",       verim: 90, tur: "nektar", gddMin: 740, gddMax: 930 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 35, tur: "kıtlık", gddMin: 940, gddMax: 1120 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 40, tur: "polen",  gddMin: 1130, gddMax: 1270 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1280, gddMax: 1370 }
    ]
  },
  "elazığ": {
    flora: "Doğu/İç Geçiş – Geven, Kekik, Yonca, Meyve",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 530, nektarBitis: 840 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Söğüt",       verim: 55, tur: "polen",  gddMin: 100, gddMax: 190 },
      { ay: "Nisan",   bitki: "Meyve Ağaçları",      verim: 80, tur: "polen",  gddMin: 200, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Akasya / Yonca",      verim: 85, tur: "nektar", gddMin: 370, gddMax: 520 },
      { ay: "Haziran", bitki: "Kekik / Çayır",       verim: 95, tur: "nektar", gddMin: 530, gddMax: 730 },
      { ay: "Temmuz",  bitki: "Geven Zirve",         verim: 95, tur: "nektar", gddMin: 740, gddMax: 930 },
      { ay: "Ağustos", bitki: "Kurak Geçiş",         verim: 35, tur: "kıtlık", gddMin: 940, gddMax: 1120 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 40, tur: "polen",  gddMin: 1130, gddMax: 1270 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1280, gddMax: 1370 }
    ]
  },
  "hakkari": {
    flora: "Yüksek Dağ & Şemdinli – Geven, Kekik, Endemik Çiçek, Meşe",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 200, nektarZirve: 460, nektarBitis: 760 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Kaplı",           verim: 5,  tur: "kıtlık", gddMin: 20,  gddMax: 90 },
      { ay: "Nisan",   bitki: "Uyanış / Polen",      verim: 35, tur: "polen",  gddMin: 100, gddMax: 210 },
      { ay: "Mayıs",   bitki: "Meyve / Meşe",        verim: 75, tur: "nektar", gddMin: 220, gddMax: 370 },
      { ay: "Haziran", bitki: "Yayla Çiçekleri / Kekik",verim:95,tur:"nektar", gddMin: 380, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Geven Zirve (Şemdinli)",verim:100,tur:"nektar", gddMin: 610, gddMax: 810 },
      { ay: "Ağustos", bitki: "Endemik Floralar",    verim: 90, tur: "nektar", gddMin: 820, gddMax: 1010 },
      { ay: "Eylül",   bitki: "Erken Güz",           verim: 35, tur: "polen",  gddMin: 1020, gddMax: 1140 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1150, gddMax: 1230 }
    ]
  },

  // ====================== GÜNEYDOĞU ANADOLU BÖLGESİ ======================
  "şanlıurfa": {
    flora: "GAP Bölgesi – Pamuk, Yonca, Karacadağ Geveni, Korunga",
    baseTemp: 14, gdd: { ciceklenmeBaslangic: 380, nektarZirve: 740, nektarBitis: 1180 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Bahar / Badem", verim: 75, tur: "polen",  gddMin: 180, gddMax: 350 },
      { ay: "Nisan",   bitki: "Meyve / Kır Çiçekleri",verim:85, tur: "nektar", gddMin: 360, gddMax: 540 },
      { ay: "Mayıs",   bitki: "Yonca / Korunga",     verim: 90, tur: "nektar", gddMin: 550, gddMax: 760 },
      { ay: "Haziran", bitki: "Pamuk Başlangıç",     verim: 85, tur: "nektar", gddMin: 770, gddMax: 1000 },
      { ay: "Temmuz",  bitki: "Pamuk Zirve",         verim: 95, tur: "nektar", gddMin: 1010, gddMax: 1250 },
      { ay: "Ağustos", bitki: "Pamuk Son / Kurak",   verim: 50, tur: "nektar", gddMin: 1260, gddMax: 1480 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 35, tur: "polen",  gddMin: 1490, gddMax: 1680 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1690, gddMax: 1820 }
    ]
  },
  "gaziantep": {
    flora: "G.Doğu Geçiş – Antepfıstığı, Kekik (Zahter), Geven, Meyve",
    baseTemp: 12, gdd: { ciceklenmeBaslangic: 330, nektarZirve: 650, nektarBitis: 1030 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Fıstık Uyanışı",verim:70,tur: "polen",  gddMin: 150, gddMax: 300 },
      { ay: "Nisan",   bitki: "Antepfıstığı Poleni", verim: 95, tur: "polen",  gddMin: 310, gddMax: 480 },
      { ay: "Mayıs",   bitki: "Kekik(Zahter) / Çayır",verim:90, tur: "nektar", gddMin: 490, gddMax: 670 },
      { ay: "Haziran", bitki: "Geven / Yonca",       verim: 85, tur: "nektar", gddMin: 680, gddMax: 890 },
      { ay: "Temmuz",  bitki: "Ayçiçeği (Kısmi) / Kurak",verim:50,tur:"kıtlık", gddMin: 900, gddMax: 1100 },
      { ay: "Ağustos", bitki: "Sıcak Kurak Dönem",   verim: 25, tur: "kıtlık", gddMin: 1110, gddMax: 1320 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 40, tur: "polen",  gddMin: 1330, gddMax: 1520 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1530, gddMax: 1650 }
    ]
  },
  "diyarbakır": {
    flora: "Dicle Havzası – Pamuk, Yonca, Geven, Kekik",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 350, nektarZirve: 700, nektarBitis: 1100 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Söğüt",       verim: 65, tur: "polen",  gddMin: 160, gddMax: 310 },
      { ay: "Nisan",   bitki: "Meyve / Kır Çiçeği",  verim: 85, tur: "nektar", gddMin: 320, gddMax: 500 },
      { ay: "Mayıs",   bitki: "Kekik / Yonca",       verim: 90, tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Haziran", bitki: "Pamuk Başlangıç",     verim: 85, tur: "nektar", gddMin: 710, gddMax: 930 },
      { ay: "Temmuz",  bitki: "Pamuk Zirve",         verim: 95, tur: "nektar", gddMin: 940, gddMax: 1180 },
      { ay: "Ağustos", bitki: "Sıcak/Kurak Geçiş",   verim: 45, tur: "kıtlık", gddMin: 1190, gddMax: 1400 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 35, tur: "polen",  gddMin: 1410, gddMax: 1600 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1610, gddMax: 1750 }
    ]
  },
  "mardin": {
    flora: "G.Doğu Bozkır – Antepfıstığı, Badem, Geven, Pamuk(Ova)",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 340, nektarZirve: 680, nektarBitis: 1080 },
    timeline: [
      { ay: "Mart",    bitki: "Badem (Erken Bahar)", verim: 85, tur: "polen",  gddMin: 150, gddMax: 300 },
      { ay: "Nisan",   bitki: "Fıstık / Kır Çiçeği", verim: 90, tur: "polen",  gddMin: 310, gddMax: 490 },
      { ay: "Mayıs",   bitki: "Kekik / Dağ Florası", verim: 85, tur: "nektar", gddMin: 500, gddMax: 680 },
      { ay: "Haziran", bitki: "Geven / Pamuk(Kızıltepe)",verim:80,tur:"nektar",gddMin: 690, gddMax: 900 },
      { ay: "Temmuz",  bitki: "Pamuk Zirve / Kurak", verim: 75, tur: "nektar", gddMin: 910, gddMax: 1120 },
      { ay: "Ağustos", bitki: "Sıcak/Kurak Dönem",   verim: 25, tur: "kıtlık", gddMin: 1130, gddMax: 1350 },
      { ay: "Eylül",   bitki: "Sonbahar Çiçekleri",  verim: 35, tur: "polen",  gddMin: 1360, gddMax: 1550 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1560, gddMax: 1700 }
    ]
  },
  "adıyaman": {
    flora: "G.Doğu Dağlık – Geven, Kekik, Badem, Pamuk",
    baseTemp: 12, gdd: { ciceklenmeBaslangic: 320, nektarZirve: 640, nektarBitis: 1010 },
    timeline: [
      { ay: "Mart",    bitki: "Badem Zirve (Polen)", verim: 90, tur: "polen",  gddMin: 140, gddMax: 280 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 85, tur: "nektar", gddMin: 290, gddMax: 460 },
      { ay: "Mayıs",   bitki: "Kekik / Akasya",      verim: 85, tur: "nektar", gddMin: 470, gddMax: 640 },
      { ay: "Haziran", bitki: "Geven / Pamuk",       verim: 85, tur: "nektar", gddMin: 650, gddMax: 860 },
      { ay: "Temmuz",  bitki: "Pamuk Devam",         verim: 80, tur: "nektar", gddMin: 870, gddMax: 1080 },
      { ay: "Ağustos", bitki: "Kurak Dönem",         verim: 30, tur: "kıtlık", gddMin: 1090, gddMax: 1300 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 35, tur: "polen",  gddMin: 1310, gddMax: 1490 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1500, gddMax: 1630 }
    ]
  },
  "batman": {
    flora: "G.Doğu Ova/Dağ – Pamuk, Geven, Kekik",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 340, nektarZirve: 680, nektarBitis: 1080 },
    timeline: [
      { ay: "Mart",    bitki: "Erken Polen",         verim: 50, tur: "polen",  gddMin: 150, gddMax: 300 },
      { ay: "Nisan",   bitki: "Meyve / Kır Çiçeği",  verim: 80, tur: "nektar", gddMin: 310, gddMax: 490 },
      { ay: "Mayıs",   bitki: "Kekik / Geven",       verim: 90, tur: "nektar", gddMin: 500, gddMax: 680 },
      { ay: "Haziran", bitki: "Pamuk / Yonca",       verim: 85, tur: "nektar", gddMin: 690, gddMax: 900 },
      { ay: "Temmuz",  bitki: "Pamuk Zirve",         verim: 95, tur: "nektar", gddMin: 910, gddMax: 1120 },
      { ay: "Ağustos", bitki: "Sıcak ve Kurak",      verim: 30, tur: "kıtlık", gddMin: 1130, gddMax: 1350 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 35, tur: "polen",  gddMin: 1360, gddMax: 1550 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1560, gddMax: 1700 }
    ]
  },
  "siirt": {
    flora: "Pervari Balı Merkezi – Geven, Kekik, Dağ Çiçekleri",
    baseTemp: 10, gdd: { ciceklenmeBaslangic: 280, nektarZirve: 580, nektarBitis: 930 },
    timeline: [
      { ay: "Mart",    bitki: "Uyanış / Badem",      verim: 60, tur: "polen",  gddMin: 110, gddMax: 220 },
      { ay: "Nisan",   bitki: "Meyve / Çayır",       verim: 80, tur: "nektar", gddMin: 230, gddMax: 400 },
      { ay: "Mayıs",   bitki: "Kekik / Kır Çiçekleri",verim: 90,tur:"nektar",  gddMin: 410, gddMax: 560 },
      { ay: "Haziran", bitki: "Geven / Dağ Kekiği",  verim: 98, tur: "nektar", gddMin: 570, gddMax: 780 },
      { ay: "Temmuz",  bitki: "Pervari Zirve(Geven)",verim: 100,tur:"nektar", gddMin: 790, gddMax: 980 },
      { ay: "Ağustos", bitki: "Yüksek Yayla (Kısmi)",verim: 60, tur: "nektar", gddMin: 990, gddMax: 1180 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 40, tur: "polen",  gddMin: 1190, gddMax: 1350 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1360, gddMax: 1480 }
    ]
  },
  "şırnak": {
    flora: "Dağlık G.Doğu – Geven, Kekik, Meşe, Yüksek Yayla",
    baseTemp: 9, gdd: { ciceklenmeBaslangic: 260, nektarZirve: 540, nektarBitis: 850 },
    timeline: [
      { ay: "Mart",    bitki: "Bahar Öncesi",        verim: 30, tur: "polen",  gddMin: 100, gddMax: 190 },
      { ay: "Nisan",   bitki: "Dağ Meyveleri / Çayır",verim:75, tur: "polen",  gddMin: 200, gddMax: 360 },
      { ay: "Mayıs",   bitki: "Kekik / Meşe",        verim: 85, tur: "nektar", gddMin: 370, gddMax: 520 },
      { ay: "Haziran", bitki: "Geven / Yüksek Kekik",verim: 95, tur: "nektar", gddMin: 530, gddMax: 730 },
      { ay: "Temmuz",  bitki: "Yayla Zirvesi",       verim: 98, tur: "nektar", gddMin: 740, gddMax: 930 },
      { ay: "Ağustos", bitki: "Endemik Floralar",    verim: 80, tur: "nektar", gddMin: 940, gddMax: 1120 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 35, tur: "polen",  gddMin: 1130, gddMax: 1270 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1280, gddMax: 1370 }
    ]
  },
  "kilis": {
    flora: "Sınır Boyu – Zeytin, Kekik (Zahter), Geven, Meyve",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 340, nektarZirve: 680, nektarBitis: 1080 },
    timeline: [
      { ay: "Mart",    bitki: "Badem / Erken Zeytin",verim: 75, tur: "polen",  gddMin: 150, gddMax: 300 },
      { ay: "Nisan",   bitki: "Meyve / Zeytin Zirve",verim: 80, tur: "polen",  gddMin: 310, gddMax: 490 },
      { ay: "Mayıs",   bitki: "Kekik (Zahter)",      verim: 95, tur: "nektar", gddMin: 500, gddMax: 680 },
      { ay: "Haziran", bitki: "Geven / Kır Çiçeği",  verim: 80, tur: "nektar", gddMin: 690, gddMax: 900 },
      { ay: "Temmuz",  bitki: "Sıcak ve Kurak",      verim: 30, tur: "kıtlık", gddMin: 910, gddMax: 1120 },
      { ay: "Ağustos", bitki: "Kurak Dönem Devam",   verim: 20, tur: "kıtlık", gddMin: 1130, gddMax: 1350 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 35, tur: "polen",  gddMin: 1360, gddMax: 1550 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 15, tur: "kıtlık", gddMin: 1560, gddMax: 1700 }
    ]
  },

  // ====================== ÖNEMLİ ARICILIK İLÇELERİ (MİKROKLİMALAR / YAYLALAR) ======================
  "anzer": {
    flora: "Rize/Anzer Yaylası (Dünyaca Ünlü) – 400+ Endemik Çiçek",
    baseTemp: 5, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 480, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Derin Kar Altında",   verim: 0,  tur: "kıtlık", gddMin: 10,  gddMax: 50 },
      { ay: "Nisan",   bitki: "Kar Altı / Uyanış Yok",verim: 0, tur: "kıtlık", gddMin: 60,  gddMax: 120 },
      { ay: "Mayıs",   bitki: "Kar Erimeleri Başlar",verim: 10, tur: "polen",  gddMin: 130, gddMax: 220 },
      { ay: "Haziran", bitki: "İlk Yayla Çiçekleri", verim: 60, tur: "nektar", gddMin: 230, gddMax: 400 },
      { ay: "Temmuz",  bitki: "Anzer Florası Zirvesi",verim:100,tur:"nektar",  gddMin: 410, gddMax: 650 },
      { ay: "Ağustos", bitki: "Yüksek Endemikler",   verim: 95, tur: "nektar", gddMin: 660, gddMax: 880 },
      { ay: "Eylül",   bitki: "Hızlı Soğuma",        verim: 20, tur: "polen",  gddMin: 890, gddMax: 1000 },
      { ay: "Ekim",    bitki: "Kış Uykusu (Kovanlar İner)",verim:0,tur:"kıtlık",gddMin: 1010,gddMax: 1080 }
    ]
  },
  "pervari": {
    flora: "Siirt/Pervari Yaylaları – Geven, Karakovan Çiçekleri",
    baseTemp: 8, gdd: { ciceklenmeBaslangic: 240, nektarZirve: 510, nektarBitis: 840 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Kaplı/Uyanış",    verim: 15, tur: "polen",  gddMin: 50,  gddMax: 130 },
      { ay: "Nisan",   bitki: "Erken Polen",         verim: 40, tur: "polen",  gddMin: 140, gddMax: 270 },
      { ay: "Mayıs",   bitki: "Kekik / Dağ Çiçeği",  verim: 80, tur: "nektar", gddMin: 280, gddMax: 430 },
      { ay: "Haziran", bitki: "Geven / Yayla",       verim: 98, tur: "nektar", gddMin: 440, gddMax: 630 },
      { ay: "Temmuz",  bitki: "Pervari Balı Zirvesi",verim:100,tur:"nektar",  gddMin: 640, gddMax: 850 },
      { ay: "Ağustos", bitki: "Yüksek Yayla (Kısmi)",verim: 70, tur: "nektar", gddMin: 860, gddMax: 1030 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 30, tur: "polen",  gddMin: 1040, gddMax: 1180 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1190, gddMax: 1280 }
    ]
  },
  "macahel": {
    flora: "Artvin/Macahel (Kafkas Arı Koruma Alanı) – Kestane, Orman Gülü, Ihlamur",
    baseTemp: 7, gdd: { ciceklenmeBaslangic: 220, nektarZirve: 480, nektarBitis: 800 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Altı",            verim: 0,  tur: "kıtlık", gddMin: 20,  gddMax: 90 },
      { ay: "Nisan",   bitki: "Kızılağaç / Orman Altı",verim: 40,tur:"polen",  gddMin: 100, gddMax: 220 },
      { ay: "Mayıs",   bitki: "Orman Gülü(Komar)",   verim: 95, tur: "nektar", gddMin: 230, gddMax: 380 },
      { ay: "Haziran", bitki: "Kestane (Saf) / Ihlamur",verim:100,tur:"nektar",gddMin: 390, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Kestane Son / Yayla", verim: 85, tur: "nektar", gddMin: 610, gddMax: 810 },
      { ay: "Ağustos", bitki: "Yayla Çiçekleri",     verim: 75, tur: "nektar", gddMin: 820, gddMax: 1010 },
      { ay: "Eylül",   bitki: "Sonbahar Poleni",     verim: 40, tur: "polen",  gddMin: 1020, gddMax: 1150 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1160, gddMax: 1250 }
    ]
  },
  "çatak": {
    flora: "Van/Çatak – Karakovan Geven Balı",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 470, nektarBitis: 770 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Altında",         verim: 0,  tur: "kıtlık", gddMin: 20,  gddMax: 90 },
      { ay: "Nisan",   bitki: "Erken Polen",         verim: 30, tur: "polen",  gddMin: 100, gddMax: 210 },
      { ay: "Mayıs",   bitki: "Çayır / Kekik",       verim: 75, tur: "nektar", gddMin: 220, gddMax: 370 },
      { ay: "Haziran", bitki: "Geven Başlangıç",     verim: 95, tur: "nektar", gddMin: 380, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Geven Zirvesi (Karakovan)",verim:100,tur:"nektar",gddMin:610,gddMax: 810 },
      { ay: "Ağustos", bitki: "Endemik Flora",       verim: 85, tur: "nektar", gddMin: 820, gddMax: 1000 },
      { ay: "Eylül",   bitki: "Güz Poleni",          verim: 35, tur: "polen",  gddMin: 1010, gddMax: 1140 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1150, gddMax: 1230 }
    ]
  },
  "şemdinli": {
    flora: "Hakkari/Şemdinli – Karakovan Meşe, Geven, Endemik",
    baseTemp: 6, gdd: { ciceklenmeBaslangic: 210, nektarZirve: 470, nektarBitis: 770 },
    timeline: [
      { ay: "Mart",    bitki: "Kar Altı",            verim: 0,  tur: "kıtlık", gddMin: 20,  gddMax: 90 },
      { ay: "Nisan",   bitki: "Uyanış",              verim: 30, tur: "polen",  gddMin: 100, gddMax: 210 },
      { ay: "Mayıs",   bitki: "Meyve / Meşe Poleni", verim: 70, tur: "nektar", gddMin: 220, gddMax: 370 },
      { ay: "Haziran", bitki: "Yayla / Geven",       verim: 90, tur: "nektar", gddMin: 380, gddMax: 600 },
      { ay: "Temmuz",  bitki: "Geven Zirvesi / Meşe Salgısı",verim:100,tur:"nektar",gddMin:610,gddMax:810 },
      { ay: "Ağustos", bitki: "Yüksek Yayla Endemik",verim: 85, tur: "nektar", gddMin: 820, gddMax: 1000 },
      { ay: "Eylül",   bitki: "Güz Otsuları",        verim: 30, tur: "polen",  gddMin: 1010, gddMax: 1140 },
      { ay: "Ekim",    bitki: "Kışa Hazırlık",       verim: 10, tur: "kıtlık", gddMin: 1150, gddMax: 1230 }
    ]
  },
  "köyceğiz": {
    flora: "Muğla/Köyceğiz – Dünya Çam Balı Başkenti, Narenciye, Hayıt",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 350, nektarZirve: 700, nektarBitis: 1100 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye Başlangıç", verim: 80, tur: "nektar", gddMin: 180, gddMax: 320 },
      { ay: "Nisan",   bitki: "Narenciye Zirvesi",   verim: 98, tur: "nektar", gddMin: 330, gddMax: 500 },
      { ay: "Mayıs",   bitki: "Kekik / Hayıt",       verim: 85, tur: "nektar", gddMin: 510, gddMax: 700 },
      { ay: "Haziran", bitki: "Dağ Çiçekleri / Kurak",verim:60, tur: "nektar", gddMin: 710, gddMax: 920 },
      { ay: "Temmuz",  bitki: "Çam Öncesi Kuraklık", verim: 30, tur: "kıtlık", gddMin: 930, gddMax: 1150 },
      { ay: "Ağustos", bitki: "Çam Pamuklu Koşnili Uyanış",verim:90,tur:"salgı",gddMin:1160, gddMax: 1380 },
      { ay: "Eylül",   bitki: "Çam Balı 1. ve 2. Kesim",verim:100,tur:"salgı", gddMin: 1390, gddMax: 1600 },
      { ay: "Ekim",    bitki: "Geç Çam / Püren",     verim: 90, tur: "salgı",  gddMin: 1610, gddMax: 1750 }
    ]
  },
  "fethiye": {
    flora: "Muğla/Fethiye – Çam, Narenciye, Hayıt, Susam",
    baseTemp: 13, gdd: { ciceklenmeBaslangic: 340, nektarZirve: 690, nektarBitis: 1080 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye / Erken Badem",verim:85,tur:"nektar", gddMin: 170, gddMax: 310 },
      { ay: "Nisan",   bitki: "Narenciye / Defne",   verim: 95, tur: "nektar", gddMin: 320, gddMax: 490 },
      { ay: "Mayıs",   bitki: "Hayıt / Susam / Kekik",verim:90, tur: "nektar", gddMin: 500, gddMax: 680 },
      { ay: "Haziran", bitki: "Dağ Florası",         verim: 75, tur: "nektar", gddMin: 690, gddMax: 900 },
      { ay: "Temmuz",  bitki: "Kurak Dönem",         verim: 40, tur: "kıtlık", gddMin: 910, gddMax: 1120 },
      { ay: "Ağustos", bitki: "Çam Salgısı (Erken)", verim: 85, tur: "salgı",  gddMin: 1130, gddMax: 1350 },
      { ay: "Eylül",   bitki: "Çam Balı Zirvesi",    verim: 100,tur: "salgı",  gddMin: 1360, gddMax: 1550 },
      { ay: "Ekim",    bitki: "Geç Çam / Püren",     verim: 85, tur: "nektar", gddMin: 1560, gddMax: 1720 }
    ]
  },
  "edremit": {
    flora: "Balıkesir/Kazdağları Etekleri – Çam, Kestane, Zeytin, Kekik",
    baseTemp: 11, gdd: { ciceklenmeBaslangic: 290, nektarZirve: 590, nektarBitis: 920 },
    timeline: [
      { ay: "Mart",    bitki: "Meyve / Söğüt",       verim: 60, tur: "polen",  gddMin: 120, gddMax: 230 },
      { ay: "Nisan",   bitki: "Kanola / Meyve",      verim: 85, tur: "nektar", gddMin: 240, gddMax: 410 },
      { ay: "Mayıs",   bitki: "Kekik / Zeytin",      verim: 85, tur: "nektar", gddMin: 420, gddMax: 590 },
      { ay: "Haziran", bitki: "Kestane(Kazdağı) / Kekik",verim:95,tur:"nektar",gddMin: 600, gddMax: 790 },
      { ay: "Temmuz",  bitki: "Ayçiçeği (Kısmi) / Orman",verim:70,tur:"nektar",gddMin: 800, gddMax: 1000 },
      { ay: "Ağustos", bitki: "Çam Salgısı Başlangıç",verim:85, tur: "salgı",  gddMin: 1010, gddMax: 1200 },
      { ay: "Eylül",   bitki: "Çam Zirvesi",         verim: 95, tur: "salgı",  gddMin: 1210, gddMax: 1370 },
      { ay: "Ekim",    bitki: "Püren / Geç Çam",     verim: 80, tur: "nektar", gddMin: 1380, gddMax: 1480 }
    ]
  },
  "erdemli": {
    flora: "Mersin/Erdemli – Narenciye, Sandal, Keçiboynuzu, Çam",
    baseTemp: 14, gdd: { ciceklenmeBaslangic: 360, nektarZirve: 720, nektarBitis: 1130 },
    timeline: [
      { ay: "Mart",    bitki: "Narenciye (Limon/Portakal)",verim:98,tur:"nektar",gddMin: 190, gddMax: 350 },
      { ay: "Nisan",   bitki: "Narenciye Zirve",     verim: 100,tur: "nektar", gddMin: 360, gddMax: 540 },
      { ay: "Mayıs",   bitki: "Zeytin / Kekik",      verim: 80, tur: "nektar", gddMin: 550, gddMax: 740 },
      { ay: "Haziran", bitki: "Sandal Ağacı / Dağ",  verim: 85, tur: "nektar", gddMin: 750, gddMax: 970 },
      { ay: "Temmuz",  bitki: "Toros Geveni (Yüksek)",verim:80, tur: "nektar", gddMin: 980, gddMax: 1200 },
      { ay: "Ağustos", bitki: "Sıcak / Çam Uyanışı", verim: 70, tur: "salgı",  gddMin: 1210, gddMax: 1420 },
      { ay: "Eylül",   bitki: "Çam / Keçiboynuzu Erken",verim:90,tur:"nektar", gddMin: 1430, gddMax: 1630 },
      { ay: "Ekim",    bitki: "Keçiboynuzu (Harnup) Zirve",verim:98,tur:"nektar",gddMin:1640,gddMax: 1780 }
    ]
  },

  // ====================== BİTKİ SPESİFİK GDD BİLGİLERİ (REFERANS) ======================
  "bitki_gdd": {
    "akasya":      { baseTemp: 10, ciceklenme: 400, zirve: 550, bitis: 700 },
    "kestane":     { baseTemp: 8,  ciceklenme: 450, zirve: 650, bitis: 800 },
    "ayçiçeği":    { baseTemp: 10, ciceklenme: 550, zirve: 750, bitis: 950 },
    "kekik":       { baseTemp: 9,  ciceklenme: 380, zirve: 560, bitis: 780 },
    "adaçayı":     { baseTemp: 9,  ciceklenme: 400, zirve: 580, bitis: 800 },
    "çam_salgısı": { baseTemp: 10, ciceklenme: 800, zirve: 1100, bitis: 1400 },
    "ihlamur":     { baseTemp: 8,  ciceklenme: 450, zirve: 620, bitis: 780 },
    "narenciye":   { baseTemp: 12, ciceklenme: 250, zirve: 400, bitis: 580 },
    "geven":       { baseTemp: 7,  ciceklenme: 400, zirve: 650, bitis: 850 },
    "yonca":       { baseTemp: 9,  ciceklenme: 400, zirve: 550, bitis: 750 },
    "hayıt":       { baseTemp: 11, ciceklenme: 350, zirve: 550, bitis: 750 },
    "püren":       { baseTemp: 10, ciceklenme: 800, zirve: 1000, bitis: 1300 },
    "fındık":      { baseTemp: 8,  ciceklenme: 100, zirve: 200, bitis: 350 },
    "sedir":       { baseTemp: 9,  ciceklenme: 480, zirve: 680, bitis: 900 },
    "pamuk":       { baseTemp: 12, ciceklenme: 600, zirve: 850, bitis: 1100 },
    "üçgül":       { baseTemp: 8,  ciceklenme: 350, zirve: 520, bitis: 720 },
    "korunga":     { baseTemp: 7,  ciceklenme: 350, zirve: 550, bitis: 750 },
    "ballıbaba":   { baseTemp: 9,  ciceklenme: 400, zirve: 580, bitis: 780 },
    "lavanta":     { baseTemp: 10, ciceklenme: 450, zirve: 650, bitis: 850 },
    "kanola":      { baseTemp: 8,  ciceklenme: 250, zirve: 400, bitis: 550 },
    "keçiboynuzu": { baseTemp: 12, ciceklenme: 800, zirve: 1200, bitis: 1600 },
    "orman_gülü":  { baseTemp: 7,  ciceklenme: 250, zirve: 450, bitis: 650 },
    "kocayemiş":   { baseTemp: 10, ciceklenme: 900, zirve: 1150, bitis: 1400 },
    "böğürtlen":   { baseTemp: 9,  ciceklenme: 500, zirve: 700, bitis: 900 }
  }
};
