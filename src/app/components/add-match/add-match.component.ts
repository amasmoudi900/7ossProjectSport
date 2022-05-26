import { MatchService } from './../../services/match.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {

  matchForm: FormGroup;
  match: any = {};
  matchId:any;
  btnTitle:string = 'Add Match';
  
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute:ActivatedRoute,
    private matchService:MatchService) { }

  ngOnInit() {
    this.matchId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.matchId) {
      this.btnTitle = 'Edit Match';
      this.matchService.getMatchById(this.matchId).subscribe(
        (data)=> {
          this.match = data.match;
        }
      )
    } 
    this.matchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })
  }

  addOrEditMatch() {
    console.log('Here my match', this.match);
    if (this.matchId) {
      // Edit
      this.matchService.editMatch(this.match).subscribe();
    } else {
      // Add
      this.matchService.addMatch(this.match).subscribe();
    }
  }

}
