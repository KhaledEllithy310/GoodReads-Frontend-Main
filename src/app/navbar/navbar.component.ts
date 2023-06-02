import { Component } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Userdata } from 'src/app/interfaces/userdata';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class NavbarComponent {
  isLoggedIn: any;
  respons!: any;
  showResults = false;
  searched: any;
  searchTerm!: string;
  constructor(
    private token: TokenserviceService,
    private router: Router,
    private http: GetdataService,
    private req: HttpClient
  ) {}
  ngOnInit() {
    this.isLoggedIn = this.token.getStoredData();
    this.http
      .getUserData(this.isLoggedIn[0].id)
      .subscribe((res: any) => (this.respons = res));
  }
  logOut() {
    this.token.removeStoredData();
  }
  search(val: any,table: any) {
    console.log(table,val);

    this.req
      .get(`http://localhost:8080/${table}/${val}`)
      .subscribe((res: any) => (this.searched = res));
  }
  blur(){
    this.searched='';
  }
}
