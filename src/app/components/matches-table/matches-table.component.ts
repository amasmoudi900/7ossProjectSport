import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {
  matches: any = [];
  constructor(
    private router: Router,
    private matchService: MatchService) { }

  ngOnInit() {
    this.getMatches();
  }

  goToDisplay(id) {
    this.router.navigate([`displayMatch/${id}`]);
  }

  goToEdit(id) {
    this.router.navigate([`editMatch/${id}`]);
  }


  deleteMatch(id) {
    this.matchService.deleteMatchById(id).subscribe(
      (data) => {
        console.log('Here message from BE', data.message);
        this.getMatches();
      }
    );
  }


  getMatches() {
    this.matchService.getAllMatches().subscribe(
      (data) => {
        this.matches = data.matchesKey;
      }
    );
  }

}
