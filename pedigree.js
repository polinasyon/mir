// pedigree.js

const STORAGE_KEY = 'polinasyon_queens';

function getQueens() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveQueens(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

window.saveQueenFromForm = function () {
  const id = document.getElementById('qId')?.value?.trim();
  if (!id) {
    alert('Küpe / Numara zorunludur!');
    return;
  }

  const queen = {
    id: id,
    irk: document.getElementById('qIrk')?.value || '',
    aba: document.getElementById('qAba')?.value?.trim() || '',
    baba: document.getElementById('qBaba')?.value?.trim() || '',
    hircinlik: document.getElementById('qHircinlik')?.value || '',
    bal: document.getElementById('qBal')?.value?.trim() || '',
    vsh: document.getElementById('qVsh')?.value?.trim() || '',
    ogul: document.getElementById('qOgul')?.value || '',
    ci: document.getElementById('ciValue')?.textContent || '',
    di: document.getElementById('diValue')?.textContent || '',
    date: new Date().toLocaleString('tr-TR')
  };

  let list = getQueens();
  const existingIndex = list.findIndex(q => q.id === id);

  if (existingIndex > -1) {
    list[existingIndex] = queen; // Güncelle
    alert('Ana arı güncellendi: ' + id);
  } else {
    list.push(queen); // Yeni kayıt
    alert('Ana arı kaydedildi: ' + id);
  }

  saveQueens(list);
  window.renderPedigreeTable();

  // Formu temizle (isteğe bağlı)
  // document.getElementById('qId').value = '';
};

window.renderPedigreeTable = function () {
  const container = document.getElementById('pedigreeTableContainer');
  if (!container) return;

  const list = getQueens();

  if (list.length === 0) {
    container.innerHTML = '<p style="color:#9ca3af; text-align:center; padding:20px;">Henüz kayıtlı damızlık ana arı yok.</p>';
    return;
  }

  let html = `
    <div style="overflow-x:auto;">
      <table style="width:100%; border-collapse:collapse; font-size:13px;">
        <thead>
          <tr style="background:rgba(245,158,11,0.15); color:#f59e0b;">
            <th style="padding:10px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.1);">Küpe</th>
            <th style="padding:10px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.1);">Irk</th>
            <th style="padding:10px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.1);">Aba</th>
            <th style="padding:10px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.1);">Baba</th>
            <th style="padding:10px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.1);">Hırçınlık</th>
            <th style="padding:10px; text-align:left; border-bottom:1px solid rgba(255,255,255,0.1);">Bal</th>
            <th style="padding:10px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.1);">İşlem</th>
          </tr>
        </thead>
        <tbody>
  `;

  list.forEach((q, index) => {
    html += `
      <tr style="border-bottom:1px solid rgba(255,255,255,0.05);">
        <td style="padding:10px; color:#fff; font-weight:600;">${q.id}</td>
        <td style="padding:10px; color:#d1d5db;">${q.irk}</td>
        <td style="padding:10px; color:#d1d5db;">${q.aba || '-'}</td>
        <td style="padding:10px; color:#d1d5db;">${q.baba || '-'}</td>
        <td style="padding:10px; color:#d1d5db;">${q.hircinlik}</td>
        <td style="padding:10px; color:#d1d5db;">${q.bal || '-'}</td>
        <td style="padding:10px; text-align:center;">
          <button onclick="deleteQueen('${q.id}')" style="background:#ef4444; color:white; border:none; padding:6px 10px; border-radius:6px; cursor:pointer; font-size:12px;">
            Sil
          </button>
        </td>
      </tr>
    `;
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  container.innerHTML = html;
};

window.deleteQueen = function (id) {
  if (!​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​
