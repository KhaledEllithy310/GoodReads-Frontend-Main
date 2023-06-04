import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { GetdataService } from '../services/getdata.service';
import { AddService } from '../services/add.service';
import { TokenserviceService } from '../services/tokenservice.service';
import Swal from 'sweetalert2';
import { async, isEmpty } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  currentRate = 0;
  book: any;
  dataStored!: any;
  reviews!: any;
  userRate: any;
  avgRate!:number;
  mapedBooks!: any;
  default=0;
  constructor(
    private activatedRoute: ActivatedRoute,
    config: NgbRatingConfig,
    private req: GetdataService,
    private add: AddService,
    private stored: TokenserviceService,
    private http: HttpClient
  ) {
    config.max = 5;
    config.readonly = true;
  }
  ngOnInit() {
    this.dataStored = this.stored.getStoredData();




    this.req
      .getBookData(this.activatedRoute.snapshot.params['id'])
      .subscribe(
        (res: any) => ((this.book = res.response), console.log(this.book))
      );


    this.req
      .getReviews(this.activatedRoute.snapshot.params['id'])
      .subscribe((res: any) => {this.reviews = res;
         this.avgRate=this.reviews.reduce((acc:any, elem:any) => acc + elem.rate, 0);
        this.avgRate = this.avgRate / this.reviews.length;
      });
    if (this.dataStored != null) {
      this.req.getUserBookData(this.dataStored[0].id).subscribe((res) => {
        this.mapedBooks = res;
      });

      this.req
        .getUsersBookData(
          this.activatedRoute.snapshot.params['id'],
          this.dataStored[0].id
        )
        .subscribe((res: any) => {
          this.userRate = res,console.log(this.userRate);
        });
    }else{
      this.userRate[0].rate=0;
    }
  }
  addRev(review: any, rate: any) {
    if (this.dataStored == null) {
      {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Login First !!',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          setTimeout(() => {
            window.location.href = 'signin';
          }, 1000);
        });
      }
    } else {
      const data = {
        userId: this.dataStored[0].id,
        bookId: this.activatedRoute.snapshot.params['id'],
        authorId: this.book.authorId,
        rate:rate,
        review:review
      };
      console.log(data);

      this.http.post('http://localhost:8080/userbooks/', data).subscribe(
          (res) => {console.log(res);

            window.location.reload();
          },
          (err) => console.error(err)
        );
    }
  }




  onSelected( value: any) {
    if (this.dataStored == null) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Login First !!',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        setTimeout(() => {
          window.location.href = 'signin';
        }, 1000);
      });
    } else {
      const data = {
        userId: this.dataStored[0].id,
        bookId: this.activatedRoute.snapshot.params['id'],
        authorId: this.book.authorId,
        status: value,
      };
      this.mapedBooks = this.mapedBooks.filter(
        (obj: any) =>
          obj.bookId._id == this.activatedRoute.snapshot.params['id']
      );
      if (this.mapedBooks.length > 0) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Already in your list',
          showConfirmButton: true,
        });
      } else {
        this.http.post('http://localhost:8080/userbooks/', data).subscribe(
          (res) => {
            console.log(res);
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Added to your list',
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              setTimeout(() => {
                window.location.reload();
              }, 1500);
            });
          },
          (err) => console.error(err)
        );
      }
    }
  }
}
