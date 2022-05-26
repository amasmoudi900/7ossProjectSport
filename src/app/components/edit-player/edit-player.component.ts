import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};
  playerId: any;
  players = [
    { id: 1, name: 'Messi', nbr: 10, poste: 'ATK', team: 'PSG', age: 33 },
    { id: 2, name: 'Ronaldo', nbr: 7, poste: 'MID', team: 'MU', age: 31 },
    { id: 3, name: 'Bechir', nbr: 1, poste: 'GK', team: 'TUN', age: 37 }
  ]
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.playerId = this.activatedRoute.snapshot.paramMap.get('id');
    for (let i = 0; i < this.players.length; i++) {
      if (this.players[i].id == this.playerId) {
        this.player = this.players[i];
        break;
      }

    }
    this.playerForm = this.formBuilder.group({
      name: [''],
      nbr: [''],
      age: [''],
      position: ['']
    })
  }

  editPlayer() {
    alert('Send new values to DB');
  }

}
