import { UserService } from './../../services/user.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  weather: any = {};
  weatherForm: FormGroup;
  result:any;
  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  search() {
    console.log('Here weather city', this.weather);
    this.userService.searchWeather(this.weather).subscribe(
      (data)=> {
        this.result = data.result;
      }
    )
  }

}
