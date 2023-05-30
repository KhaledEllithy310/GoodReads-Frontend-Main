import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { GetdataService } from 'src/app/services/getdata.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  registerForm: FormGroup;
  passValue!: string;
  confirmPassValue!: string;
  firstName: any;
  lastName: any;
  password: any;
  email: any;
  error: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private flag: GetdataService
  ) {
    // this.passValue = this.registerForm.controls['Password'].value;
    // this.confirmPassValue = this.registerForm.controls['ConfirmPassword'].value;

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
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\S+$/),
          // Validators.requiredTrue(this.confirmPassValid()),
        ],
      ],
    });
  }

  submitRegiterForm() {
    const avatar = this.fileInput.nativeElement.files[0];
    const formData = new FormData();
    formData.set('firstName', this.firstName);
    formData.set('lastName', this.lastName);
    formData.set('email', this.email);
    formData.set('password', this.password);
    formData.set('avatar', avatar);
    console.log(formData);

    this.http.post('http://localhost:8080/register', formData).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Congrats.',
          text: "Thanks For Register",
        });
        this.router.navigate(['/signin']);
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
