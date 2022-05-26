import { PlayerService } from './../../services/player.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit {

  players: any = [];
  constructor(
    private router:Router,
    private P:PlayerService) { }

  ngOnInit() {
    this.P.getAllPlayers().subscribe(
      (data)=> {
        this.players = data.playersKey;
      }
    );
    // this.players = [
    //   { id: 1, name: 'Messi', nbr: 10, position: 'ATK', age: '36' },
    //   { id: 2, name: 'Ronaldo', nbr: 7, position: 'MID', age: '33' },
    //   { id: 3, name: 'Bechir', nbr: 1, position: 'GK', age: '37' }
    // ]
  }

  goToEditPlayer(id){
    this.router.navigate([`editPlayer/${id}`])
  }

}
