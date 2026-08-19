import { StorageService } from './storage.js';
import { CameraService } from './camera.js';
import { RutnerAIEngine } from './rutnerAI.js';

export class PedigreeModule {
  constructor() {
    this.storage = new StorageService('polinasyon_queens');
    this.camera = null;
    this.lastAIResult = null;
    this.elements = {};
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
    if (this.elements.videoElement && this.elements.canvasElement) {
      this.camera = new CameraService(
        this.elements.videoElement,
        this.elements.canvasElement,
        this.elements.camPlaceholder
      );
    }
  }

  bindEvents() {
    // 1. Kaydet Butonu
    if (this.elements.saveBtn) {
      this.elements.saveBtn.addEventListener('click', () => this.handleSave());
    }

    // 2. Kamera Aç / Kapat Butonu
    if (this.elements.startCamBtn && this.camera) {
      this.elements.startCamBtn.addEventListener('click', async () => {
        const active = await this.camera.toggle();
        this.elements.startCamBtn.textContent = active ? 'Kamerayı Kapat' : 'Kamerayı Aç';
        if (this.elements.captureBtn) {
          this.elements.captureBtn.disabled = !active;
        }
      });
    }

    // 3. Görsel Dondurma ve Kontrast Tespiti (1. AŞAMA)
    if (this.elements.captureBtn && this.camera) {
      this.elements.captureBtn.addEventListener('click', () => {
        // Yeni çekimde noktaları sıfırla (varsa camera.resetPoints fonksiyonu)
        if (typeof this.camera.resetPoints === 'function') {
          this.camera.resetPoints();
        }

        const validation = this.camera.captureAndValidate();

        if (!validation.valid) {
          alert(validation.reason || 'Görsel doğrulanamadı.');
          return;
        }

        alert(
          '✅ Kanat Dokusu Algılandı!\n\n' +
          'Şimdi kanat üzerindeki damar kesişim noktalarına sırasıyla DOKUNUN:\n' +
          '1. Nokta: A Noktası (Ana Damar Başı)\n' +
          '2. Nokta: B Noktası (Kübital Kesişim)\n' +
          '3. Nokta: C Noktası (Alt Damar Bitişi)'
        );
      });
    }

    // 4. Canvas Üzerinde Dokunarak Nirengi (Point) Seçimi (2. AŞAMA)
    if (this.elements.canvasElement && this.camera) {
      this.elements.canvasElement.addEventListener('click', (e) => {
        const rect = this.elements.canvasElement.getBoundingClientRect();
        const scaleX = this.elements.canvasElement.width / rect.width;
        const scaleY = this.elements.canvasElement.height / rect.height;

        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;

        const metrics = this.camera.addPoint(x, y);

        if (metrics) {
          if (this.elements.ciValue) this.elements.ciValue.textContent = metrics.ci;
          if (this.elements.diValue) this.elements.diValue.textContent = metrics.di;

          // Rutner AI Analizini Gerçek Ölçüm Değerleriyle Çalıştır
          if (typeof RutnerAIEngine !== 'undefined' && typeof RutnerAIEngine.analyzeRace === 'function') {
            const aiResult = RutnerAIEngine.analyzeRace(metrics.ci, metrics.rawDiscoidal);
            this.lastAIResult = aiResult;

            alert(
              `🧬 RUTNER AI IRK ANALİZİ SONUCU:\n` +
              `------------------------------------\n` +
              `Hesaplanan CI: ${metrics.ci}\n` +
              `Tespit Edilen Hat: ${aiResult.predictedRace}\n` +
              `AI Güven Skoru: %${aiResult.confidence}\n` +
              `Genetik Durum: ${aiResult.isHybrid ? '⚠️ Yüksek Melezleşme / Sapma' : '✅ Saf Kan / Standart Uyumlu'}`
            );
          }
        }
      });
    }

    // Global Silme Fonksiyonunu Bağla
    window.deleteQueen = (id) => this.handleDelete(id);
  }

  handleSave() {
    if (!this.elements.qId) return;

    const id = this.elements.qId.value.trim();
    if (!id) {
      alert('Küpe / Numara zorunludur!');
      return;
    }

    const queen = {
      id: id,
      irk: this.elements.qIrk ? this.elements.qIrk.value : '-',
      aba: this.elements.qAba ? this.elements.qAba.value.trim() : '',
      baba: this.elements.qBaba ? this.elements.qBaba.value.trim() : '',
      hircinlik: this.elements.qHircinlik ? this.elements.qHircinlik.value : '1',
      bal: this.elements.qBal ? this.elements.qBal.value.trim() : '',
      vsh: this.elements.qVsh ? this.elements.qVsh.value.trim() : '',
      ogul: this.elements.qOgul ? this.elements.qOgul.value : '0',
      ci: this.elements.ciValue ? this.elements.ciValue.textContent : '-',
      di: this.elements.diValue ? this.elements.diValue.textContent : '-',
      aiRace: this.lastAIResult ? this.lastAIResult.predictedRace : 'Analiz Yapılmadı',
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

    if (!list || list.length === 0) {
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
              <th>Rutner AI Tespiti</th>
              <th>CI</th>
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
          <td style="color:#f59e0b; font-weight:bold;">${q.aiRace || '-'}</td>
          <td>${q.ci || '-'}</td>
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
