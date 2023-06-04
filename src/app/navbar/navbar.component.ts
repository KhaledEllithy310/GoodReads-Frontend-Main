import { Component } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Userdata } from 'src/app/interfaces/userdata';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FlagService } from '../services/flag.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class NavbarComponent {
  categories!: any[];
  isLoggedIn: any;
  respons!: any;
  showResults = false;
  searched: any;
  searchTerm!: string;
  flagValue!: any;
  constructor(
    private token: TokenserviceService,
    private router: Router,
    private http: GetdataService,
    private req: HttpClient,
    private flag: FlagService,
    private getdataService: GetdataService,
    private Router: Router
  ) {}
  ngOnInit() {
    this.isLoggedIn = this.token.getStoredData();
    if (this.isLoggedIn != null) {
      this.http
        .getUserData(this.isLoggedIn[0].id)
        .subscribe((res: any) => (this.respons = res));
    }
    //Display All Category
    this.getAllCategory();
  }
  logOut() {
    this.flag.setFlag(0);
    this.token.removeStoredData();
  }
  search(val: any, table: any) {
    console.log(table, val);

    this.req
      .get(`http://localhost:8080/${table}/${val}`)
      .subscribe((res: any) => (this.searched = res));
  }
  blur() {
    this.searched = '';
  }

  //GET ALL CATEGORIES
  getAllCategory() {
    this.getdataService
      .getAllCategory()
      .subscribe((res: any) => (this.categories = res));
  }

  //RETIRECT TO THE BOOK BY CATOGORY PAGE
  redirectDetails(categoryId: any) {
    this.Router.navigate(['BookByCategory', categoryId]);
  }

  //DISOLAY ALL CATEGORY FROM THE MENU
  displayMenu() {
    const container_category = document.querySelector(
      '.container_category'
    ) as HTMLElement;
    if (!container_category) {
      return;
    }

    if (container_category.style.display !== 'block') {
      // Show the drop-down menu if it's not visible
      container_category.style.display = 'block';
    } else {
      // Hide the drop-down menu after a short delay
      setTimeout(() => {
        container_category.style.display = 'none';
      }, 100);
    }
  }
}
