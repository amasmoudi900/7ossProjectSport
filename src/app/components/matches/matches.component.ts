import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  // var matches (empty array)
  matches: any = [];
  x: number;

  constructor(private matchService: MatchService) { }

  ngOnInit() {
    // Call Service method getAllMatches() to get matches from BE
    this.matchService.getAllMatches().subscribe(
      (data) => {
        console.log('Here response from BE', data);
        this.matches = data.matchesKey;
      }
    );
  }

}
