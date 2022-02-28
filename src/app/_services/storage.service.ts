import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public saveToStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  public addToItem(key: string, value: string): void {
    if (!this.getFromStorage(key)) {
      this.saveToStorage(key, JSON.stringify([value]));
      return;
    }
    const parsed: any[] = JSON.parse(this.getFromStorage(key) || '');
    parsed.push(value);
    console.log(JSON.stringify(parsed));
    this.saveToStorage(key, JSON.stringify(parsed))
  }

  public getFromStorage(key: string): string | null {
    return sessionStorage.getItem(key);
  }
}
