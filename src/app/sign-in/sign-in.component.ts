import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Userdata } from 'src/app/interfaces/userdata';
import { GetdataService } from 'src/app/services/getdata.service';
import { TokenserviceService } from 'src/app/services/tokenservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  password: any;
  email: any;
  respons!:Userdata;
  sessionData:any=[];
  data:any;
  constructor(private http: HttpClient, private router: Router,private token: TokenserviceService) {}
  submitLoginForm() {

    this.http
      .post('http://localhost:8080/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
         (res:any) => {this.respons=res,

          // this.token.setID(this.respons._id),
           this.data={
            token:this.respons.token,
            id:this.respons._id,
           }
           this.sessionData.push(this.data)
          this.token.storeData(this.sessionData);
          this.router.navigate(['headerpage']);
        },
        (err) => {
          if (err)
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: err.error,
            });
        }
      );
  }
}
