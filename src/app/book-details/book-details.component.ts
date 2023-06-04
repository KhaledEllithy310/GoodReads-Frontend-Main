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

  mapedBooks!: any;
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
      .subscribe((res: any) => (this.book = res.response,console.log(this.book)
      ));
    this.req
      .getReviews(this.activatedRoute.snapshot.params['id'])
      .subscribe((res: any) => {
        (this.reviews = res), console.log(res);
      });
    if (this.dataStored != null) {
      this.req.getUserBookData(this.dataStored[0].id).subscribe((res) => {
        (this.mapedBooks = res);
      });
    }
  }
  addRev(review: any) {
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
        // ,
        //   console.log(res), window.location.reload();
      }
    } else {
      const data = {
        userId: this.dataStored[0].id,
        bookId: this.book._id,
        review: review,
      };
      this.add.addReview(data).subscribe(
        (res) => {
          window.location.reload();
        },
        (err) => console.error(err)
      );
    }
  }

  onSelected(id: any, value: any) {
    const data = {
      userId: this.dataStored[0].id,
      bookId: this.activatedRoute.snapshot.params['id'],
      authorId: this.book.authorId,
      status: value,
      rate: 0,
    };
    console.log(data);

    console.log(this.mapedBooks);

    this.mapedBooks = this.mapedBooks.filter(
      (obj: any) => obj.bookId._id == this.activatedRoute.snapshot.params['id']
    );
    console.log(this.mapedBooks);

    if (this.mapedBooks.length > 0) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Already in yor list',
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
            showConfirmButton: true,
          });
        },
        (err) => console.error(err)
      );
    }
  }
}
