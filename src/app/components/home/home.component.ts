import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  y: any = { id: 1, scoreOne: 5, scoreTwo: 2, teamOne: 'FCB', teamTwo: 'RMD' };
  constructor() { }

  ngOnInit() {
  }

}
