import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Userdata } from '../interfaces/userdata';
import { TokenserviceService } from './tokenservice.service';
import { Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GetdataService {
  constructor(private http: HttpClient, private token: TokenserviceService) {}
  getUserData(id: string) {
    return this.http.get(`http://localhost:8080/users/${id}`);
  }
  getUserBookData(id: string) {
    return this.http.get(`http://localhost:8080/userbooks/${id}`);
  }
  // getUserRate(bId: string, uId: string) {
  //   return this.http.get(`http://localhost:8080/rates/${bId}/${uId}`);
  // }

  //DISPLAY ALL CATEGORIES
  getAllCategory() {
    return this.http.get('http://localhost:8080/category/');
  }

  //DISPLAY ALL AUTHORS
  getAllAuthor() {
    return this.http.get('http://localhost:8080/Authors/');
  }

  //DISPLAY ALL BOOKS
  getAllBook() {
    return this.http.get('http://localhost:8080/Books/');
  }

authData(data:any){
  return this.http.post('http://localhost:8080/welcome/',data);
}
getBookData(id: string) {
  return this.http.get(`http://localhost:8080/books/show/${id}`);
}

getReviews(data: string) {
  return this.http.post(`http://localhost:8080/userbooks/reviews/`,{bookId:data});
}
  //DISPLAY ALL BOOKS
  getBookByCategory(id: any) {
    return this.http.get('http://localhost:8080/Books/category' + id);
  }

  //get reviews
  getUsersBookData(bookId: string,userId:any) {
    return this.http.get(`http://localhost:8080/userbooks/${bookId}/${userId}`);
  }
}
