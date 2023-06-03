import { DeleteService } from './../services/delete.service';
import { UpdateService } from './../services/update.service';
import { Component } from '@angular/core';
import { AddService } from '../services/add.service';
import { GetdataService } from '../services/getdata.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css'],
})
export class AdminCategoryComponent {
  categories!: any[];
  data!: any[];
  idCategory!: number;
  constructor(
    private updateService: UpdateService,
    private deleteService: DeleteService,
    private addService: AddService,
    private getdataService: GetdataService
  ) {}

  ngOnInit() {
    this.getAllCategory();
  }

  //GET ALL CATEGORIES
  getAllCategory() {
    this.getdataService
      .getAllCategory()
      .subscribe((res: any) => (this.categories = res));
  }

  createCategory(data: any) {
    this.addService.createCategory(data).subscribe((res) => console.log(res));
    this.getAllCategory();
    window.location.reload();
  }

  deleteCategory(index: any) {
    let category = document.getElementById(`cate${index}`);
    category?.remove();
    let idCategory = this.categories[index]._id;
    this.deleteService
      .deleteCategory(idCategory)
      .subscribe((res) => console.log(res));
    console.log(this.categories);
    window.location.reload();
  }

  //GET THE ID OF THE OBJECT
  getIdCategory(idCategory: any) {
    this.idCategory = idCategory;
  }

  updateCategory(data: any, idCategory: any) {
    this.updateService
      .updateCategory(idCategory, data)
      .subscribe((res) => console.log(res));
    window.location.reload();
  }
}
