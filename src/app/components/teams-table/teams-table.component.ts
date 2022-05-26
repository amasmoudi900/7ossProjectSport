import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teamsTab: any = [];

  constructor() { }

  ngOnInit() {
    this.teamsTab = [
      { id: 1, name: 'FCB', stadium: 'Camp new', owner: 'Salah', foundation: 1899 },
      { id: 2, name: 'RMD', stadium: 'Berna', owner: 'Ali', foundation: 1899 },
      { id: 3, name: 'JUV', stadium: 'Allians', owner: 'Mohsen', foundation: 1988 },
      { id: 4, name: 'OM', stadium: 'Vellodrome', owner: 'Houssem', foundation: 1899 }
    ]
  }

}
