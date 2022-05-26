import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  findedMatch: any;
  matchId: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private X: MatchService) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    this.X.getMatchById(this.matchId).subscribe(
      (data) =>{
        this.findedMatch = data.match;
      }
    );
    // for (let i = 0; i < this.matches.length; i++) {
    //   if (this.matches[i].id == this.matchId) {
    //     this.findedMatch = this.matches[i];
    //     break;
    //   }
    // }
  }

}
