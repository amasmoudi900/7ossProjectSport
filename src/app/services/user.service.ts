import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userURL: string = "http://localhost:3000/users";
  constructor(private httpClient: HttpClient) { }

  login(user) {
    return this.httpClient.post<{ message: string, user: any }>(`${this.userURL}/login`, user);
  }
  signup(user, img: File) {
    let formData = new FormData();
    formData.append('firstName', user.firstName);
    formData.append('lastName', user.lastName);
    formData.append('email', user.email);
    formData.append('pwd', user.pwd);
    formData.append('img', img);
    return this.httpClient.post<{ user: any, message: string }>(`${this.userURL}/signup`, formData);
  }

  searchWeather(obj) {
    return this.httpClient.post<{ result: any }>(`${this.userURL}/weather`, obj);
  }
}
