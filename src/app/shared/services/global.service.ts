import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  private readonly isMobile = window.innerWidth < 1024;

  constructor() {}

  getIsMobile(): boolean {
    return this.isMobile;
  }
}
