import { Injectable } from '@angular/core';
import { Userdata } from '../interfaces/userdata';

@Injectable({
  providedIn: 'root',
})
export class TokenserviceService {
  constructor() {}
  // private readonly TOKEN_KEY: any;
  private readonly ID: any;

  // setToken(token: string) {
  //   localStorage.setItem(this.TOKEN_KEY, token)
  // }
  setID(id:string) {
    sessionStorage.setItem(this.ID, id);
  }
  // getToken(): string | null {
  //   return localStorage.getItem(this.TOKEN_KEY);
  // }
  getId(): string | null {
    return sessionStorage.getItem(this.ID);
  }

  // removeToken() {
  //   localStorage.removeItem(this.TOKEN_KEY);
  // }
  removeID() {
    sessionStorage.removeItem(this.ID);
  }
}
