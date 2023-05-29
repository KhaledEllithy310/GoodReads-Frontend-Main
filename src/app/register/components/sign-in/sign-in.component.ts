import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  password: any;
  email: any;
  constructor(private http: HttpClient, private router: Router) {}
  submitLoginForm() {
    // API implement.
    this.http
      .post('http://localhost:8080/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (res) => {
          console.log(res);
          // Swal.fire({
          //   icon: 'success',
          //   title: 'Congrats.',
          //   text: 'Thanks For Register',
          // });
          this.router.navigate(['/']);
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
