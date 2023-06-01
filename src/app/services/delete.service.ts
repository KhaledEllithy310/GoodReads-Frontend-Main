import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  constructor(private http: HttpClient) {}

  //DELETE CATEGORY
  deleteCategory(id: any) {
    return this.http.delete('http://localhost:8080/category/' + id);
  }

  //DELETE Author
  deleteAuthor(id: any) {
    return this.http.delete('http://localhost:8080/Author/' + id);
  }

  //DELETE Book
  deleteBook(id: any) {
    return this.http.post('http://localhost:8080/Books/delete/', {
      bookId: id,
    });
  }
}
