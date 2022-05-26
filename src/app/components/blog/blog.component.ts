import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  articles: any = [];
  constructor() { }

  ngOnInit() {
    this.articles = [
      { id: 1, date: '13/04/22', title: 'Title 1', description: 'Description1' },
      { id: 2, date: '13/04/22', title: 'Title 2', description: 'Description2' },
      { id: 3, date: '13/04/22', title: 'Title 3', description: 'Description3' },
      { id: 4, date: '13/04/22', title: 'Title 4', description: 'Description4' },
      { id: 5, date: '13/04/22', title: 'Title 5', description: 'Description5' },
    ]
  }

}
