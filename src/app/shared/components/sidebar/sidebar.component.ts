import { Component } from '@angular/core';
import { CategoryService } from 'src/app/AdminHome/services/category.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private categoryService: CategoryService) {}

  // ngOnInit() {
  //   this.getAllCategory();
  // }

  // getAllCategory() {
  //   this.categoryService
  //     .getAllCategory()
  //     .subscribe((res: any) => console.log(res));
  // }
}
