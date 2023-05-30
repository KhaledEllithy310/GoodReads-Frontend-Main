import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http: HttpClient) {}
  updateUserData(id:string,data:any){
    return this.http.put(`http://localhost:8080/users/${id}`,data)
  }
}
