import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  constructor(private http: HttpClient) {}
  getUserData(id:string){
    return this.http.get(`http://localhost:8080/users/${id}`)
  }
  getUserBookData(id:string){
    return this.http.get(`http://localhost:8080/userbooks/${id}`)
  }
  getUserRate(bId:string,uId:string){
    return this.http.get(`http://localhost:8080/rates/${bId}/${uId}`)
  }
}
