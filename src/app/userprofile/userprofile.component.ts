import { Component, ElementRef, ViewChild } from '@angular/core';
import { Userdata } from '../interfaces/userdata';
import { GetdataService } from '../services/getdata.service';
import { TokenserviceService } from '../services/tokenservice.service';
import { HttpClient } from '@angular/common/http';
import {
  NgbModal,
  NgbModalConfig,
  NgbRatingConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class UserprofileComponent {
  registerForm: FormGroup;
  user!: Userdata;
  userId!: any;
  //books details
  books: any;
  readed: any;
  reading: any;
  wantToRead: any;
  //update info form

  firstName: any;
  lastName: any;
  password: any;
  email: any;
  constructor(
    private fb: FormBuilder,
    private token: TokenserviceService,
    private req: GetdataService,
    private http: HttpClient,
    config1: NgbRatingConfig,
    config: NgbModalConfig,
    private modalService: NgbModal
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    config1.max = 5;
    this.registerForm = this.fb.group({
      email: [
        '',
        [
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/
          ),
        ],
      ],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required, Validators.maxLength(20)]],
    });
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

  //update user info
  open(content: any) {
    this.firstName = this.user.firstName;
    this.lastName = this.user.lastName;
    this.email = this.user.email;
    this.modalService.open(content);
  }
  selectedFile: any;
  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files) {
      this.selectedFile = inputElement.files[0];
    }else{
      this.selectedFile = null;
    }
  }
  updateInfo() {
    const avatar = this.selectedFile;
    console.log(avatar);

    const formData = new FormData();
    formData.set('firstName', this.firstName);
    formData.set('lastName', this.lastName);
    formData.set('email', this.email);
    formData.set('password', this.password);
    formData.set('avatar', avatar);
    this.http
      .put(`http://localhost:8080/users/${this.userId}`, formData)
      .subscribe(
        (res) => {Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'updates has been saved',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          setTimeout(() => {
            window.location.reload();
          }, 1200);
        })
        // ,
        //   console.log(res), window.location.reload();
        },
        (err) => {
          if (err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error,
            }),
              console.error(err);
        }
      );
  }
}
