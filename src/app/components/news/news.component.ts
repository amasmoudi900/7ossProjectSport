import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: any = [];
  constructor() { }

  ngOnInit() {
    this.news = [
      { id: 1, name: 'Name 1', title: 'Title 1' },
      { id: 2, name: 'Name 2', title: 'Title 2' },
      { id: 3, name: 'Name 3', title: 'Title 3' },
      { id: 4, name: 'Name 4', title: 'Title 4' }
    ]
  }

}
