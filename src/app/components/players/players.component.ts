import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: any = [];
  constructor(private playerService:PlayerService) { }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(
      (data)=> {
        this.players = data.playersKey;
      }
    );
    // this.players = [
    //   { id: 1, name: 'Messi', nbr: 10, poste: 'ATK', team: 'PSG' },
    //   { id: 2, name: 'Ronaldo', nbr: 7, poste: 'MID', team: 'MU' },
    //   { id: 3, name: 'Bechir', nbr: 1, poste: 'GK', team: 'TUN' }
    // ]
  }

}
