import { Injectable } from '@angular/core';
import { Userdata } from '../interfaces/userdata';

@Injectable({
  providedIn: 'root',
})
export class TokenserviceService {
  constructor() {}

  storeData(data:any) {
    sessionStorage.setItem('userData', JSON.stringify(data));
  }

  getStoredData(){
    const userData = sessionStorage.getItem('userData');
    if (userData !== null) {
      return JSON.parse(userData);
    }
  }

  removeStoredData() {
    sessionStorage.removeItem('userData');
  }
}
