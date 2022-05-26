import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  path: string;
  role: string = 'admin';
  imagePreview:string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.path = this.router.url;
    console.log('here path', this.path);

    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.minLength(5), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.minLength(6), Validators.maxLength(12), Validators.required]],
      img: ['']
    })
  }

  signup() {
    // Send Data to BE
    if (this.path == '/signup') {
      this.signupForm.value.role = 'user';
    } else {
      this.signupForm.value.role = 'admin';
    }
    console.log('this.signupForm.value', this.signupForm.value);

    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (data) => {
        console.log('Here data after signup', data);
        this.router.navigate([""]);
      }
    )
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    console.log('Here my selected file', file);

    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
  }

}
