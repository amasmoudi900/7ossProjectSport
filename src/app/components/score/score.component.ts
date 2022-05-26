import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  // je vais considérer x en tant que Objet
  @Input() match: any;
  constructor() { }

  ngOnInit() {
  }

  scoreColor(a, b) {
    let classColor;
    if (a < b) {
      classColor = [0, 'red', 'Loss'];
    } else if (a > b) {
      classColor = [1, 'green', 'Win'];
    } else {
      classColor = [2, 'blue', 'Draw'];
    }
    return classColor;
  }

  optimalScoreColor(a, b) {
    let classColor;
    if (a < b) {
      classColor = 'redClass';
    } else if (a > b) {
      classColor = 'greenClass';
    } else {
      classColor = 'blueClass';
    }
    return classColor;
  }

}
