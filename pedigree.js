import { StorageService } from './storage.js';
import { CameraService } from './camera.js';
import { RutnerAIEngine } from './rutnerAI.js';

export class PedigreeModule {
  constructor() {
    this.storage = new StorageService('polinasyon_queens');
    this.camera = null;
    this.lastAIResult = null;
    
    this.colonySamples = [];
    this.currentMetrics = null;
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
      saveBtn: document.getElementById('saveBtn'),
      tableContainer: document.getElementById('pedigreeTableContainer'),
      
      ciValue: document.getElementById('ciValue'),
      diValue: document.getElementById('diValue'),
      startCamBtn: document.getElementById('startCamBtn'),
      captureBtn: document.getElementById('captureBtn'),
      videoElement: document.getElementById('videoElement'),
      canvasElement: document.getElementById('canvasElement'),
      camPlaceholder: document.getElementById('camPlaceholder'),
      
      a4DistA: document.getElementById('a4DistA'),
      a4DistB: document.getElementById('a4DistB'),
      addSampleBtn: document.getElementById('addSampleBtn'),
      sampleList: document.getElementById('sampleList'),
      emptyListText: document.getElementById('emptyListText'),
      analyzeColonyBtn: document.getElementById('analyzeColonyBtn')
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
      this.elements.startCamBtn.className = active ? 'btn-secondary' : 'btn-primary';
      this.elements.captureBtn.disabled = !active;
      
      if (active) {
        this.elements.captureBtn.textContent = 'Fotoğraf Çek';
        this.elements.captureBtn.classList.remove('btn-secondary');
        this.elements.captureBtn.classList.add('btn-primary');
      }
    });

    this.elements.captureBtn.addEventListener('click', () => {
      if (this.elements.captureBtn.textContent === 'İptal / Yeniden Çek') {
        this.camera.resetPoints();
        this.elements.captureBtn.textContent = 'Fotoğraf Çek';
        this.elements.captureBtn.classList.replace('btn-secondary', 'btn-primary');
        this.elements.ciValue.textContent = '-';
        this.elements.diValue.textContent = '-';
        this.currentMetrics = null;
        
        if (this.elements.addSampleBtn) {
          this.elements.addSampleBtn.disabled = true;
          this.elements.addSampleBtn.style.opacity = '0.6';
          this.elements.addSampleBtn.style.cursor = 'not-allowed';
        }
        
        this.elements.videoElement.style.display = 'block';
        this.elements.canvasElement.style.display = 'none';
        return;
      }

      const validation = this.camera.captureAndValidate();
      if (!validation.valid) {
        alert(validation.reason);
        return;
      }

      this.elements.captureBtn.textContent = 'İptal / Yeniden Çek';
      this.elements.captureBtn.classList.replace('btn-primary', 'btn-secondary');

      alert(
        '✅ Kanat Dokusu Algılandı!\n\n' +
        'Şimdi kanat üzerindeki damar kesişim noktalarına sırasıyla DOKUNUN:\n' +
        '1. Nokta: A Noktası (Ana Damar Başı)\n' +
        '2. Nokta: B Noktası (Kübital Kesişim)\n' +
        '3. Nokta: C Noktası (Alt Damar Bitişi)'
      );
    });

    let isProcessing = false;
    const handleCanvasInteraction = (e) => {
      if (e.cancelable) e.preventDefault();
      if (isProcessing) return;
      isProcessing = true;

      const rect = this.elements.canvasElement.getBoundingClientRect();
      const scaleX = this.elements.canvasElement.width / rect.width;
      const scaleY = this.elements.canvasElement.height / rect.height;

      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      const x = (clientX - rect.left) * scaleX;
      const y = (clientY - rect.top) * scaleY;

      const metrics = this.camera.addPoint(x, y);

      if (metrics) {
        this.currentMetrics = metrics;
        this.elements.ciValue.textContent = metrics.ci;
        this.elements.diValue.textContent = metrics.di;

        if (this.elements.addSampleBtn) {
          this.elements.addSampleBtn.disabled = false;
          this.elements.addSampleBtn.style.opacity = '1';
          this.elements.addSampleBtn.style.cursor = 'pointer';
        }
      }

      setTimeout(() => { isProcessing = false; }, 200);
    };

    if (window.PointerEvent) {
      this.elements.canvasElement.addEventListener('pointerdown', handleCanvasInteraction);
    } else {
      this.elements.canvasElement.addEventListener('click', handleCanvasInteraction);
    }

    if (this.elements.addSampleBtn) {
      this.elements.addSampleBtn.addEventListener('click', () => {
        if (!this.currentMetrics) return;

        let a4AngleVal = null;
        if (this.elements.a4DistA && this.elements.a4DistB) {
          const distA = parseFloat(this.elements.a4DistA.value);
          const distB = parseFloat(this.elements.a4DistB.value);
          
          if (!isNaN(distA) && !isNaN(distB) && typeof RutnerAIEngine.calculateA4FromDistances === 'function') {
            a4AngleVal = RutnerAIEngine.calculateA4FromDistances(distA, distB);
          }
        }

        this.colonySamples.push({
          ci: this.currentMetrics.ci,
          discoidal: this.currentMetrics.rawDiscoidal,
          a4Angle: a4AngleVal
        });

        this.updateSampleListUI();

        this.camera.resetPoints();
        this.currentMetrics = null;
        this.elements.ciValue.textContent = '-';
        this.elements.diValue.textContent = '-';
        if (this.elements.a4DistA) this.elements.a4DistA.value = '';
        if (this.elements.a4DistB) this.elements.a4DistB.value = '';
        
        this.elements.addSampleBtn.disabled = true;
        this.elements.addSampleBtn.style.opacity = '0.6';
        this.elements.addSampleBtn.style.cursor = 'not-allowed';
        
        this.elements.canvasElement.style.display = 'none';
        this.elements.videoElement.style.display = 'block';
        this.elements.captureBtn.textContent = 'Fotoğraf Çek';
        this.elements.captureBtn.classList.replace('btn-secondary', 'btn-primary');
      });
    }

    if (this.elements.analyzeColonyBtn) {
      this.elements.analyzeColonyBtn.addEventListener('click', () => {
        if (this.colonySamples.length === 0) return;
        
        const aiResult = RutnerAIEngine.analyzeColony(this.colonySamples);
        this.lastAIResult = aiResult;
        
        alert(
          `📊 RUTNER AI KOLONİ ANALİZİ (${this.colonySamples.length} Arı)\n` +
          `------------------------------------\n` +
          `Tespit Edilen Hat: ${aiResult.predictedRace}\n` +
          `AI Güven Skoru: %${aiResult.confidence}\n` +
          `Genetik Durum: ${aiResult.isHybrid ? '⚠️ Yüksek Varyasyon / Melezleşme' : '✅ Stabil Saf Kan / Standart Uyumlu'}`
        );
      });
    }

    window.deleteQueen = (id) => this.handleDelete(id);
  }

  updateSampleListUI() {
    if (!this.elements.sampleList) return;
    
    if (this.elements.emptyListText) {
      this.elements.emptyListText.style.display = 'none';
    }

    const index = this.colonySamples.length - 1;
    const sample = this.colonySamples[index];
    
    const li = document.createElement('li');
    li.style.padding = '8px 10px';
    li.style.borderBottom = '1px solid #374151';
    li.style.color = '#e5e7eb';
    li.innerHTML = `<strong>Arı ${index + 1}:</strong> CI: ${sample.ci} | DI: ${sample.discoidal} ${sample.a4Angle ? `| A4: ${sample.a4Angle}°` : ''}`;
    
    this.elements.sampleList.appendChild(li);

    if (this.elements.analyzeColonyBtn) {
      this.elements.analyzeColonyBtn.disabled = false;
      this.elements.analyzeColonyBtn.style.opacity = '1';
      this.elements.analyzeColonyBtn.style.cursor = 'pointer';
    }
  }

  handleSave() {
    const id = this.elements.qId.value.trim();
    if (!id) {
      alert('Küpe / Numara zorunludur!');
      return;
    }

    let finalCI = this.elements.ciValue.textContent;
    let finalDI = this.elements.diValue.textContent;

    if (this.colonySamples.length > 0) {
      const avgCI = (this.colonySamples.reduce((sum, s) => sum + parseFloat(s.ci), 0) / this.colonySamples.length).toFixed(2);
      finalCI = `${avgCI} (Ort.)`;
      finalDI = 'Koloni Analizi';
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
      ci: finalCI,
      di: finalDI,
      aiRace: this.lastAIResult ? this.lastAIResult.predictedRace : 'Analiz Yapılmadı',
      date: new Date().toLocaleString('tr-TR')
    };

    const status = this.storage.saveOrUpdate(queen);
    alert(status === 'updated' ? `Güncellendi: ${id}` : `Kaydedildi: ${id}`);
    
    this.colonySamples = [];
    if (this.elements.sampleList) {
      this.elements.sampleList.innerHTML = '<li id="emptyListText" style="padding:12px; text-align:center; color:#9ca3af;">Henüz ölçüm eklenmedi. (Hedef: 10-15 Arı)</li>';
    }
    
    if (this.elements.analyzeColonyBtn) {
      this.elements.analyzeColonyBtn.disabled = true;
      this.elements.analyzeColonyBtn.style.opacity = '0.6';
      this.elements.analyzeColonyBtn.style.cursor = 'not-allowed';
    }
    
    if (this.elements.addSampleBtn) {
      this.elements.addSampleBtn.disabled = true;
      this.elements.addSampleBtn.style.opacity = '0.6';
      this.elements.addSampleBtn.style.cursor = 'not-allowed';
    }
    
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
