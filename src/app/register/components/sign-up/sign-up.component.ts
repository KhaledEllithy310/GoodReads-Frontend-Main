import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  registerForm: FormGroup;
  passValue!: string;
  confirmPassValue!: string;
  constructor(private fb: FormBuilder) {
    // this.passValue = this.registerForm.controls['Password'].value;
    // this.confirmPassValue = this.registerForm.controls['ConfirmPassword'].value;

    this.registerForm = this.fb.group({
      Email: [
        '',
        [
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      Password: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[*@%$#])[A-Za-z\d*@%$#]{8,}$/
          ),
        ],
      ],
      Name: ['', [Validators.required]],
      userName: [
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
    console.log(this.registerForm);
  }
}
