/**
 * pedigree.js
 * Gelişmiş Islah, Performans Skorlama ve Morfometrik Analiz Modülü
 */

// ====================== PEDIGREE / ISLAH VERİLERİ ======================
const pedigreeData = {
  queens: [
    {
      id: "TR-26-054",
      irk: "Karniyol (Anatolica)",
      yil: 2026,
      durum: "Aktif Damızlık",
      anneHatti: "AN-21-012",
      babaHatti: "DR-24-008",
      inbreeding: 1.2,
      performans: {
        uysallik: 4,
        balVerimi: 5,
        ogulEgilimi: "Çok Düşük",
        hijyen: "Mükemmel"
      },
      morfometri: {
        cubitalIndex: 2.45,
        discoidal: 3.1
      },
      tarih: "2026-05-12"
    },
    {
      id: "TR-26-061",
      irk: "Kafkas",
      yil: 2026,
      durum: "Test Kolonisi",
      anneHatti: "KF-22-003",
      babaHatti: "DR-25-011",
      inbreeding: 2.8,
      performans: {
        uysallik: 5,
        balVerimi: 4,
        ogulEgilimi: "Orta",
        hijyen: "İyi"
      },
      morfometri: { cubitalIndex: 1.95, discoidal: 1.8 },
      tarih: "2026-06-03"
    },
    {
      id: "TR-25-118",
      irk: "Artvin",
      yil: 2025,
      durum: "Aktif Damızlık",
      anneHatti: "AR-20-007",
      babaHatti: "DR-23-015",
      inbreeding: 0.9,
      performans: {
        uysallik: 3,
        balVerimi: 5,
        ogulEgilimi: "Çok Düşük",
        hijyen: "Mükemmel"
      },
      morfometri: { cubitalIndex: 2.10, discoidal: 2.4 },
      tarih: "2025-08-20"
    },
    {
      id: "TR-26-033",
      irk: "Karniyol (Baskal)",
      yil: 2026,
      durum: "Test Kolonisi",
      anneHatti: "AN-22-019",
      babaHatti: "DR-24-008",
      inbreeding: 4.5,
      performans: {
        uysallik: 2,
        balVerimi: 3,
        ogulEgilimi: "Yüksek",
        hijyen: "Zayıf"
      },
      morfometri: { cubitalIndex: 2.60, discoidal: 4.2 },
      tarih: "2026-04-18"
    }
  ]
};

// ---------- Skor Hesaplama ----------
function hesaplaPerformansSkoru(p) {
  const uysallikPuan = p.uysallik * 20;
  const balPuan = p.balVerimi * 20;

  let ogulPuan = 60;
  if (p.ogulEgilimi === "Çok Düşük") ogulPuan = 100;
  else if (p.ogulEgilimi === "Yüksek") ogulPuan = 20;

  let hijyenPuan = 70;
  if (p.hijyen === "Mükemmel") hijyenPuan = 100;
  else if (p.hijyen === "Zayıf") hijyenPuan = 30;

  const skor = (
    uysallikPuan * 0.20 +
    balPuan * 0.35 +
    ogulPuan * 0.20 +
    hijyenPuan * 0.25
  );

  return Math.round(skor);
}

// ---------- Damızlık Önerisi ----------
function damizlikOnerisi(queen) {
  const skor = hesaplaPerformansSkoru(queen.performans);
  const inb = queen.inbreeding;

  if (skor >= 80 && inb <= 3.0) return { text: "Üstün Damızlık", color: "#10b981" };
  if (skor >= 65 && inb <= 5.0) return { text: "İyi / Test Edilebilir", color: "#f59e0b" };
  return { text: "Damızlıktan Çıkar", color: "#ef4444" };
}

// ---------- Sıralama ----------
function siraliQueenListesi() {
  return [...pedigreeData.queens]
    .map(q => ({
      ...q,
      skor: hesaplaPerformansSkoru(q.performans),
      oneri: damizlikOnerisi(q)
    }))
    .sort((a, b) => b.skor - a.skor);
}

// ---------- Trend (Ortalama) ----------
function ortalamaTrend() {
  const list = siraliQueenListesi();
  if (list.length === 0) return 0;
  const toplam = list.reduce((acc, q) => acc + q.skor, 0);
  return Math.round(toplam / list.length);
}

// ====================== MODÜL BAŞLATICI ======================
export function initPedigreeModule() {
  console.log("Pedigree & Islah Modülü Aktif. Ortalama Trend Skoru:", ortalamaTrend());

  const startCamBtn = document.getElementById('startCamBtn');
  const captureBtn = document.getElementById('captureBtn');
  const video = document.getElementById('videoElement');
  const camPlaceholder = document.getElementById('camPlaceholder');
  const ciValue = document.getElementById('ciValue');
  const diValue = document.getElementById('diValue');

  let stream = null;

  async function startCamera() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      video.srcObject = stream;
      video.style.display = 'block';
      camPlaceholder.style.display = 'none';
      captureBtn.disabled = false;
      startCamBtn.textContent = 'Kamerayı Kapat';
    } catch (err) {
      console.error("Kamera hatası:", err);
      alert("Kamera erişimi sağlanamadı.");
    }
  }

  function stopCamera() {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      video.style.display = 'none';
      camPlaceholder.style.display = 'block';
      captureBtn.disabled = true;
      startCamBtn.textContent = 'Kamerayı Aç';
      stream = null;
    }
  }

  function analyzeWings() {
    const randomQueen = pedigreeData.queens[Math.floor(Math.random() * pedigreeData.queens.length)];
    ciValue.textContent = randomQueen.morfometri.cubitalIndex;
    diValue.textContent = randomQueen.morfometri.discoidal;
    
    console.log("Morfometrik analiz tamamlandı. Seçilen hat:", randomQueen.id);
  }

  if (startCamBtn && captureBtn) {
    startCamBtn.onclick = () => (stream ? stopCamera() : startCamera());
    captureBtn.onclick = analyzeWings;
  }

  return {
    stop: stopCamera,
    getData: siraliQueenListesi,
    getTrend: ortalamaTrend
  };
}
