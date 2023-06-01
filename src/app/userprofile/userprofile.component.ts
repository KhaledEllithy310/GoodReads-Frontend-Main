import { Component } from '@angular/core';
import { Userdata } from '../interfaces/userdata';
import { UserdataService } from '../services/userdata.service';
import { GetdataService } from '../services/getdata.service';
import { TokenserviceService } from '../services/tokenservice.service';
import { Userbook } from '../interfaces/userbook';
import { HttpClient } from '@angular/common/http';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent {
  user!: Userdata;
  userId!: any;
  books: any;
  readed: any;
  reading: any;
  wantToRead: any;
  constructor(
    private token: TokenserviceService,
    private req: GetdataService,
    private http: HttpClient,
    config: NgbRatingConfig
  ) {
    config.max = 5;
  }
  ngOnInit() {
    this.userId = this.token.getStoredData()[0].id;
    this.req
      .getUserData(this.userId)
      .subscribe((res: any) => (this.user = res));
    this.req.getUserBookData(this.userId).subscribe((res: any) => {
      (this.books = res),
        (this.readed = this.books.filter((elm: any) => {
          return elm.status === 'readed';
        })),
        (this.reading = this.books.filter((elm: any) => {
          return elm.status === 'reading';
        })),
        (this.wantToRead = this.books.filter((elm: any) => {
          return elm.status === 'want to read';
        }));
    });
  }

  //delete book from user list
  delete(id: any) {
    this.http.delete(`http://localhost:8080/userbooks/${id}`).subscribe(
      (res) => {
        console.log(res), window.location.reload();
      },
      (err) => console.error(err)
    );
    window.location.reload();
  }

  //update book status
  onSelected(id: any, value: any) {
    let data = { status: value };
    this.http.put(`http://localhost:8080/userbooks/${id}`, data).subscribe(
      (res) => {
        console.log(res), window.location.reload();
      },
      (err) => console.error(err)
    );
  }

  //update user rate
  updateRate(id: any, val: number) {
    console.log(id);
    console.log(val);
    let rate = { rate: val };
    this.http.put(`http://localhost:8080/userbooks/${id}`, rate).subscribe(
      (res) => {
        console.log(res), window.location.reload();
      },
      (err) => console.error(err)
    );
  }
}
