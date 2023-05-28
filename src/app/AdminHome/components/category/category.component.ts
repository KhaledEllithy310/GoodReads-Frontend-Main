import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from 'src/app/interfaces/category';
// import { LocationStrategy, PathLocationStrategy } from '@angular/common';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  categories!: any[];
  data!: Category;
  idCategory!: number;
  constructor(
    private categoryService: CategoryService // private location: Location, // private locationStrategy: LocationStrategy
  ) {}

  ngOnInit() {
    this.getAllCategory();
  }

  getAllCategory() {
    this.categoryService
      .getAllCategory()
      .subscribe((res: any) => (this.categories = res));
  }

  createCategory(data: any) {
    this.categoryService
      .createCategory(data)
      .subscribe((res) => console.log(res));
    this.getAllCategory();
    // this.refreshPage();
  }

  deleteCategory(index: any) {
    let category = document.getElementById(`cate${index}`);
    category?.remove();
    let idCategory = this.categories[index]._id;
    this.categoryService
      .deleteCategory(idCategory)
      .subscribe((res) => console.log(res));
    console.log(this.categories);
    // this.refreshPage();
  }

  //GET THE ID OF THE OBJECT
  getIdCategory(index: any) {
    let idCategory = this.categories[index]._id;
    console.log(idCategory);
    return this.categoryService.setIdCategory(idCategory);
  }

  updateCategory(data: any, idCategory: number) {
    console.log('data', data);
    console.log('idCategory', idCategory);

    this.categoryService
      .getIdCategory()
      .subscribe((res) => (this.idCategory = res));
    console.log('this.idCategory', this.idCategory);

    this.categoryService
      .updateCategory(idCategory, data)
      .subscribe((res) => console.log(res));
  }
  // refreshPage() {
  //   const currentUrl = this.locationStrategy.path();
  //   this.locationStrategy.pushState(null, '', currentUrl, '');
  // }
}

// constructor(private http: HttpClient) {}

// getAllCategory() {
//   // return this.http.get('http://localhost:2000/category/');
//   return this.http.get('https://dummyjson.com/products');
// }
