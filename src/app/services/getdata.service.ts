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
  getDetails(id:string){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
