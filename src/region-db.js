// region-db: handles backups/imports for flora and other regional data
// Provides export (download) and import (restore) functionality. Uses SubtleCrypto to compute SHA-256 for extended format.
export function initRegionDB(flora){
  async function sha256Hex(str){
    const enc = new TextEncoder().encode(str);
    const hash = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(hash)).map(b=>b.toString(16).padStart(2,'0')).join('');
  }

  function downloadBlob(filename, blob){
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(()=> URL.revokeObjectURL(url), 3000);
  }

  async function exportBackup(format='json'){
    const items = flora.list();
    if (format==='json'){
      const blob = new Blob([JSON.stringify(items, null, 2)], {type:'application/json'});
      downloadBlob('polinasyon-flora-backup.json', blob);
      return;
    }
    // extended
    const payload = { version:1, generatedAt: new Date().toISOString(), count: items.length, items };
    const text = JSON.stringify(payload, null, 2);
    const hash = await sha256Hex(text);
    const extended = { meta: { sha256: hash }, payload };
    const blob = new Blob([JSON.stringify(extended, null, 2)], {type:'application/json'});
    downloadBlob('polinasyon-flora-backup-extended.json', blob);
  }

  async function importBackupFile(file){
    if (!file) return alert('Dosya seçilmedi');
    const text = await file.text();
    let parsed;
    try{ parsed = JSON.parse(text); }catch(e){ return alert('Dosya JSON değil veya bozuk'); }
    // detect extended
    if (parsed && parsed.payload && parsed.meta){
      // verify
      const payloadText = JSON.stringify(parsed.payload, null, 2);
      const actualHash = await sha256Hex(payloadText);
      if (actualHash !== parsed.meta.sha256) return alert('SHA256 doğrulaması başarısız — dosya bozulmuş olabilir');
      const items = parsed.payload.items || [];
      flora.replaceAll(items);
      alert('Yedek başarıyla geri yüklendi (extended)');
      return;
    }
    // assume simple array
    if (Array.isArray(parsed)){
      flora.replaceAll(parsed);
      alert('Yedek başarıyla geri yüklendi');
      return;
    }

    alert('Tanımlanmayan yedek formatı');
  }

  return { exportBackup, importBackupFile };
}
