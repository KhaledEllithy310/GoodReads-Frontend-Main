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



  //UPDATE CATEGORY
  updateCategory(id: any, data: any) {
    return this.http.put('http://localhost:8080/category/' + id, data);
  }

  //UPDATE Author
  updateAuthor(id: any, data: any) {
    return this.http.put('http://localhost:8080/Author/' + id, data);
  }

  // UPDATE Book
  updateBook(id: any, data: any) {
    return this.http.put('http://localhost:8080/Books/' + id, data);
  }
}
