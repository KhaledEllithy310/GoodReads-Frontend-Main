import { Component } from '@angular/core';
import { GetdataService } from 'src/app/services/getdata.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Userdata } from 'src/app/interfaces/userdata';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn: any;
  respons!: any;
  constructor(
    private token: TokenserviceService,
    private router: Router,
    private http: GetdataService
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
}
