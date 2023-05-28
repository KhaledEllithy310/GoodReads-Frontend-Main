import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private idCategory = new BehaviorSubject(0);
  name!: string;
  constructor(private http: HttpClient) {}

  //SET ID CATEGORY
  setIdCategory(newVal: number) {
    this.idCategory.next(newVal);
  }

  //GET ID CATEGORY
  getIdCategory() {
    return this.idCategory.asObservable();
  }

  //DISPLAY ALL CATEGORIES
  getAllCategory() {
    return this.http.get('http://localhost:2000/category/');
    // return this.http.get('https://dummyjson.com/products');
  }

  //ADD CATEGORY
  createCategory(data: any) {
    return this.http.post('http://localhost:2000/category/', data);
  }

  //DELETE CATEGORY
  deleteCategory(id: any) {
    return this.http.delete('http://localhost:2000/category/' + id);
  }

  //UPDATE CATEGORY
  updateCategory(id: any, data: any) {
    return this.http.put('http://localhost:2000/category/' + id, data);
  }
}
