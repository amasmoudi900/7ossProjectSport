import { Component, OnInit } from '@angular/core';

// Decorator
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  actualDate:Date;
  constructor() { }

  ngOnInit() {
   this.actualDate = new Date();
  }

}
