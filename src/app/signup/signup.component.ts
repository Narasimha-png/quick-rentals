import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor() {
    this.signupForm = new FormGroup({
      customerName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      drivingLicence: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z0-9]+$')]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
