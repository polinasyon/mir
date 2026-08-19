export class StorageService {
  constructor(storageKey = 'polinasyon_queens') {
    this.key = storageKey;
  }

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch (error) {
      console.error('Depolama verisi okunamadı:', error);
      return [];
    }
  }

  saveAll(data) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error('Depolama hatası:', error);
      return false;
    }
  }

  saveOrUpdate(item, idField = 'id') {
    const items = this.getAll();
    const index = items.findIndex((i) => i[idField] === item[idField]);

    if (index > -1) {
      items[index] = item;
    } else {
      items.push(item);
    }

    this.saveAll(items);
    return index > -1 ? 'updated' : 'created';
  }

  remove(id, idField = 'id') {
    const items = this.getAll().filter((item) => item[idField] !== id);
    this.saveAll(items);
  }
}
