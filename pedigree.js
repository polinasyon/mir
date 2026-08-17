// pedigree.js — Hatasız Kaydet & Sil Modülü

const STORAGE_KEY = 'polinasyon_pedigree_db';

export const pedigreeData = {
  queens: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
    {
      id: "TR-26-054",
      irk: "Karniyol",
      anneHatti: "AN-24-012",
      babaHatti: "DR-25-008",
      hircinlik: "Çok Sakin (1/5)",
      balVerimi: "85 kg / Sezon",
      vshSkoru: "%92"
    }
  ]
};

export function saveToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pedigreeData.queens));
}

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

  container.querySelectorAll('.btn-delete').forEach(btn => {
    btn.onclick = (e) => deleteQueen(e.target.getAttribute('data-id'));
  });
}

export function deleteQueen(id) {
  if (confirm(`${id} numaralı kaydı silmek istediğinize emin misiniz?`)) {
    pedigreeData.queens = pedigreeData.queens.filter(q => q.id !== id);
    saveToStorage();
    renderPedigreeTable();
  }
}

export function saveQueenFromForm() {
  const idInput = document.getElementById('qId');
  const id = idInput ? idInput.value.trim() : '';

  if (!id) {
    alert("Lütfen Küpe / Numara alanını doldurun!");
    return;
  }

  const newQueen = {
    id: id,
    irk: document.getElementById('qIrk')?.value || 'Karniyol',
    anneHatti: document.getElementById('qAba')?.value.trim() || '',
    babaHatti: document.getElementById('qBaba')?.value.trim() || '',
    hircinlik: document.getElementById('qHircinlik')?.value || '',
    balVerimi: document.getElementById('qBal')?.value.trim() || '',
    vshSkoru: document.getElementById('qVsh')?.value.trim() || ''
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

export function initPedigreeModule() {
  renderPedigreeTable();

  const saveBtn = document.getElementById('saveQueenBtn');
  if (saveBtn) {
    saveBtn.onclick = saveQueenFromForm; // Tıklama olayını doğrudan bağlama
  }
}
