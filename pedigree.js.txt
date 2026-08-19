import { StorageService } from './storage.js';
import { CameraService } from './camera.js';

export class PedigreeModule {
  constructor() {
    this.storage = new StorageService('polinasyon_queens');
    this.camera = null;
  }

  init() {
    this.bindDOM();
    this.initCamera();
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
      ciValue: document.getElementById('ciValue'),
      diValue: document.getElementById('diValue'),
      saveBtn: document.getElementById('saveBtn'),
      startCamBtn: document.getElementById('startCamBtn'),
      captureBtn: document.getElementById('captureBtn'),
      videoElement: document.getElementById('videoElement'),
      canvasElement: document.getElementById('canvasElement'),
      camPlaceholder: document.getElementById('camPlaceholder'),
      tableContainer: document.getElementById('pedigreeTableContainer')
    };
  }

  initCamera() {
    this.camera = new CameraService(
      this.elements.videoElement,
      this.elements.canvasElement,
      this.elements.camPlaceholder
    );
  }

  bindEvents() {
    this.elements.saveBtn.addEventListener('click', () => this.handleSave());
    
    this.elements.startCamBtn.addEventListener('click', async () => {
      const active = await this.camera.toggle();
      this.elements.startCamBtn.textContent = active ? 'Kamerayı Kapat' : 'Kamerayı Aç';
      this.elements.captureBtn.disabled = !active;
    });

    this.elements.captureBtn.addEventListener('click', () => {
      const metrics = this.camera.captureAndAnalyze();
      if (metrics) {
        this.elements.ciValue.textContent = metrics.ci;
        this.elements.diValue.textContent = metrics.di;
        alert(`Analiz Tamamlandı!\nKübital İndeks: ${metrics.ci}\nDiskoidal Kayma: ${metrics.di}`);
      }
    });

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
      ci: this.elements.ciValue.textContent,
      di: this.elements.diValue.textContent,
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
              <th>Irk</th>
              <th>Aba</th>
              <th>Baba</th>
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
          <td>${q.aba || '-'}</td>
          <td>${q.baba || '-'}</td>
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
