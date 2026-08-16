/**
 * pedigree.js
 * Islah ve Morfometrik Analiz Modülü (Global Yapı)
 */

window.PedigreeModule = {
  data: {
    queens: [
      { id: "TR-26-054", irk: "Karniyol", morfometri: { cubitalIndex: 2.45, discoidal: 3.1 } },
      { id: "TR-26-061", irk: "Kafkas", morfometri: { cubitalIndex: 1.95, discoidal: 1.8 } }
    ]
  },
  
  analyze: function() {
    const q = this.data.queens[Math.floor(Math.random() * this.data.queens.length)];
    document.getElementById('ciValue').textContent = q.morfometri.cubitalIndex;
    document.getElementById('diValue').textContent = q.morfometri.discoidal;
  }
};
