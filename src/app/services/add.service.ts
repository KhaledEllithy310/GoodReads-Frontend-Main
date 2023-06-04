import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddService {
  constructor(private http: HttpClient) {}

  //ADD CATEGORY
  createCategory(data: any) {
    return this.http.post('http://localhost:8080/category/', data);
  }

  //ADD Author
  createAuthor(data: any) {
    return this.http.post('http://localhost:8080/Authors/', data);
  }

  //ADD Book
  createBook(data: any) {
    return this.http.post('http://localhost:8080/Books/store/', data);
  }

  //Add review
  addReviewRate(data: any) {
    return this.http.post(`http://localhost:8080/userbooks`, data);
  }
}
