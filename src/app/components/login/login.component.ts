import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  p: string = "Login";
  loginForm: FormGroup;
  user: any = {};
  msgError: string;
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      pwd: ['']
    })
  }

  login() {
    console.log('Login is clicked', this.user);
    this.userService.login(this.user).subscribe(
      (data) => {
        console.log('here data after login', data);
        if (data.message != "2") {
          this.msgError = "Please check Email/pwd";
        } else {
          if (data.user.role == "admin") {
            this.router.navigate(['admin']);
          } else {
            this.router.navigate(['']);
          }
        }
      }
    );
  }

}
