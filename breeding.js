import { StorageService } from './storage.js';

export class BreedingModule {
  constructor() {
    this.storage = new StorageService('polinasyon_queens');
  }

  init() {
    this.bindDOM();
    this.bindEvents();
    this.renderTable();
  }

  bindDOM() {
    this.elements = {
      qId: document.getElementById('qId'),
      qIrk: document.getElementById('qIrk'),
      qAba: document.getElementById('qAba'),
      qBaba: document.getElementById('qBaba'),
      qHircinlik: document.getElementById('qHircinlik'),
      qBal: document.getElementById('qBal'),
      qVsh: document.getElementById('qVsh'),
      qOgul: document.getElementById('qOgul'),
      saveBtn: document.getElementById('saveBtn'),
      tableContainer: document.getElementById('pedigreeTableContainer')
    };
  }

  bindEvents() {
    if (this.elements.saveBtn) {
      this.elements.saveBtn.addEventListener('click', () => this.handleSave());
    }
    window.deleteQueen = (id) => this.handleDelete(id);
  }

  handleSave() {
    const id = this.elements.qId.value.trim();
    if (!id) {
      alert('Küpe / Numara zorunludur!');
      return;
    }

    const queen = {
      id: id,
      irk: this.elements.qIrk.value,
      aba: this.elements.qAba.value.trim(),
      baba: this.elements.qBaba.value.trim(),
      hircinlik: this.elements.qHircinlik.value,
      bal: this.elements.qBal.value.trim(),
      vsh: this.elements.qVsh.value.trim(),
      ogul: this.elements.qOgul.value,
      date: new Date().toLocaleString('tr-TR')
    };

    const status = this.storage.saveOrUpdate(queen);
    alert(status === 'updated' ? `Güncellendi: ${id}` : `Kaydedildi: ${id}`);
    this.renderTable();
  }

  handleDelete(id) {
    if (!confirm(`${id} küpeli ana arı silinsin mi?`)) return;
    this.storage.remove(id);
    this.renderTable();
  }

  renderTable() {
    if (!this.elements.tableContainer) return;
    const list = this.storage.getAll();

    if (list.length === 0) {
      this.elements.tableContainer.innerHTML =
        '<p style="color:#9ca3af; text-align:center; padding:20px;">Henüz kayıt yok.</p>';
      return;
    }

    let html = `
      <div style="overflow-x:auto;">
        <table>
          <thead>
            <tr>
              <th>Küpe</th>
              <th>Beyan Irk</th>
              <th>Hırçınlık</th>
              <th>Bal</th>
              <th style="text-align:center;">Sil</th>
            </tr>
          </thead>
          <tbody>
    `;

    list.forEach((q) => {
      html += `
        <tr>
          <td>${q.id}</td>
          <td>${q.irk}</td>
          <td>${q.hircinlik}</td>
          <td>${q.bal || '-'}</td>
          <td style="text-align:center;">
            <button onclick="window.deleteQueen('${q.id}')" 
                    style="background:#ef4444;color:white;border:none;padding:6px 12px;border-radius:6px;cursor:pointer;font-size:12px;">
              Sil
            </button>
          </td>
        </tr>
      `;
    });

    html += `</tbody></table></div>`;
    this.elements.tableContainer.innerHTML = html;
  }
}

