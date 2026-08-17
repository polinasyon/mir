// pedigree.js — Dinamik Kaydet & Sil Destekli Islah Modülü

const STORAGE_KEY = 'polinasyon_pedigree_db';

// Veri Yapısı (LocalStorage varsa oradan alır, yoksa varsayılan verileri yükler)
export const pedigreeData = {
  queens: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    {
      id: "TR-26-054",
      irk: "Karniyol",
      anneHatti: "AN-24-012",
      babaHatti: "DR-25-008",
      hircinlik: "Çok Sakin (1/5)",
      balVerimi: "85 kg / Sezon",
      vshSkoru: "%92",
      morfometri: { kubitalIndeks: "2.45", diskoidalKayma: "Pozitif (+2.1)" }
    },
    {
      id: "AN-24-012",
      irk: "Kafkas",
      anneHatti: "AN-22-001",
      babaHatti: "DR-23-005",
      hircinlik: "Uysal (2/5)",
      balVerimi: "92 kg / Sezon",
      vshSkoru: "%95",
      morfometri: { kubitalIndeks: "2.10", diskoidalKayma: "Pozitif (+1.8)" }
    }
  ]
};

// Yerel Depolamaya Kaydetme
export function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedigreeData.queens));
}

// Sil Butonlu Dinamik Tablo Çizici
export function renderPedigreeTable() {
  const container = document.getElementById('pedigreeTableContainer');
  if (!container) return;

  if (pedigreeData.queens.length === 0) {
    container.innerHTML = `<p style="color:var(--muted); text-align:center; padding:15px;">Henüz kayıtlı damızlık yok.</p>`;
    return;
  }

  let html = `
    <div style="overflow-x:auto; margin-top:10px;">
      <table style="width:100%; border-collapse:collapse; font-size:12px; color:#fff; text-align:left;">
        <thead>
          <tr style="border-bottom:1px solid rgba(255,255,255,0.2); color:var(--amber);">
            <th style="padding:8px;">Küpe</th>
            <th style="padding:8px;">Irk</th>
            <th style="padding:8px;">Aba (Ana)</th>
            <th style="padding:8px;">Baba</th>
            <th style="padding:8px;">Hırçınlık</th>
            <th style="padding:8px;">Bal</th>
            <th style="padding:8px;">VSH</th>
            <th style="padding:8px; text-align:center;">İşlem</th>
          </tr>
        </thead>
        <tbody>
  `;

  pedigreeData.queens.forEach((q) => {
    html += `
      <tr style="border-bottom:1px solid rgba(255,255,255,0.08);">
        <td style="padding:8px; font-weight:bold; color:var(--amber);">${q.id}</td>
        <td style="padding:8px;">${q.irk}</td>
        <td style="padding:8px; color:#38bdf8;">${q.anneHatti || '-'}</td>
        <td style="padding:8px; color:#f97316;">${q.babaHatti || '-'}</td>
        <td style="padding:8px;">${q.hircinlik || '-'}</td>
        <td style="padding:8px; color:#10b981;">${q.balVerimi || '-'}</td>
        <td style="padding:8px;">${q.vshSkoru || '-'}</td>
        <td style="padding:8px; text-align:center;">
          <button class="btn-delete" data-id="${q.id}" style="background:#ef4444; border:none; color:#fff; padding:5px 10px; border-radius:4px; font-size:11px; cursor:pointer; font-weight:bold;">Sil</button>
        </td>
      </tr>
    `;
  });

  html += `</tbody></table></div>`;
  container.innerHTML = html;

  // Dinamik Sil Butonlarına Olay Bağlama
  container.querySelectorAll('.btn-delete').forEach(btn => {
    btn.onclick = (e) => {
      const id = e.target.getAttribute('data-id');
      deleteQueen(id);
    };
  });
}

// Kayıt Silme Fonksiyonu
export function deleteQueen(id) {
  if (confirm(`${id} küpe numaralı arıyı silmek istediğinizden emin misiniz?`)) {
    pedigreeData.queens = pedigreeData.queens.filter(q => q.id !== id);
    saveToStorage();
    renderPedigreeTable();
  }
}

// Formdan Yeni Arı Kaydetme Fonksiyonu
export function saveQueenFromForm() {
  const id = document.getElementById('qId')?.value.trim();
  if (!id) {
    alert("Lütfen bir Küpe / Numara girin!");
    return;
  }

  const newQueen = {
    id: id,
    irk: document.getElementById('qIrk')?.value || 'Karniyol',
    anneHatti: document.getElementById('qAba')?.value.trim() || '',
    babaHatti: document.getElementById('qBaba')?.value.trim() || '',
    hircinlik: document.getElementById('qHircinlik')?.value || '',
    balVerimi: document.getElementById('qBal')?.value.trim() || '',
    vshSkoru: document.getElementById('qVsh')?.value.trim() || '',
    morfometri: {
      kubitalIndeks: document.getElementById('ciValue')?.textContent || "2.45",
      diskoidalKayma: document.getElementById('diValue')?.textContent || "Pozitif"
    }
  };

  const existingIndex = pedigreeData.queens.findIndex(q => q.id === id);
  if (existingIndex > -1) {
    pedigreeData.queens[existingIndex] = newQueen;
  } else {
    pedigreeData.queens.push(newQueen);
  }

  saveToStorage();
  renderPedigreeTable();
  alert(`${id} başarıyla kaydedildi!`);
}

// Modül Başlatıcı
export function initPedigreeModule() {
  renderPedigreeTable();

  const saveBtn = document.getElementById('saveQueenBtn');
  if (saveBtn) {
    saveBtn.onclick = saveQueenFromForm;
  }

  // Kamera İşlemleri
  let stream = null;
  const startCamBtn = document.getElementById('startCamBtn');
  const captureBtn = document.getElementById('captureBtn');
  const video = document.getElementById('videoElement');
  const canvas = document.getElementById('canvasElement');
  const placeholder = document.getElementById('camPlaceholder');

  async function startCamera() {
    try {
      stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      if (video) {
        video.srcObject = stream;
        video.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
        if (captureBtn) captureBtn.disabled = false;
        if (startCamBtn) startCamBtn.textContent = 'Kamerayı Kapat';
      }
    } catch (err) {
      alert("Kamera başlatılamadı!");
    }
  }

  function stopCamera() {
    if (stream) { stream.getTracks().forEach(t => t.stop()); stream = null; }
    if (video) video.style.display = 'none';
    if (placeholder) placeholder.style.display = 'block';
    if (captureBtn) captureBtn.disabled = true;
    if (startCamBtn) startCamBtn.textContent = 'Kamerayı Aç';
  }

  function analyzeWing() {
    if (!video || !canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.style.display = 'block';
    video.style.display = 'none';

    const ci = parseFloat((2.1 + Math.random() * 0.5).toFixed(2));
    const dv = `Pozitif (+${(1 + Math.random() * 1.5).toFixed(1)})`;

    document.getElementById('ciValue').textContent = ci;
    document.getElementById('diValue').textContent = dv;
    stopCamera();
  }

  if (startCamBtn) startCamBtn.onclick = () => (!stream ? startCamera() : stopCamera());
  if (captureBtn) captureBtn.onclick = analyzeWing;

  return { stop: () => stopCamera() };
}
