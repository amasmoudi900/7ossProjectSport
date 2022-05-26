import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  playerForm: FormGroup;
  player: any = {};
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      name: [''],
      nbr: [''],
      age: [''],
      position: ['']
    })
  }

  addPlayer() {
    console.log('Here my player', this.player);

  }

}
