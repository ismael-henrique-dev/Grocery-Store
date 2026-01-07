export class StorageService {
  public saveData<Type>(key: string, data: Type) {
    localStorage.setItem(key, JSON.stringify(data))
  }

  public getData(key: string) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
  }

  public removeData(key: string) {
    localStorage.removeItem(key)
  }

  public clearAll() {
    localStorage.clear()
  }
}
