import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  // Adresse du serveur BE
  playerURL: string = "http://localhost:3000/players";
  // httpClient: send request and return response
  constructor(private httpClient: HttpClient) { }

  // Req to get all objects ([{},{},{},{}])
  getAllPlayers() {
    return this.httpClient.get<{ playersKey: any }>(this.playerURL);
  }
  // Req to get player by id ({})
  getPlayerById(id) {
    return this.httpClient.get(`${this.playerURL}/${id}`);
    // return this.httpClient.get(this.playerURL + "/" + id);
  }
  // Req to delete player by id
  deletePlayerById(id) {
    return this.httpClient.delete(`${this.playerURL}/${id}`);
  }
  // Req to add player
  addPlayer(playerObj) {
    return this.httpClient.post(this.playerURL, playerObj);
  }
  // Req to edit player (playerObj: new values)
  editPlayer(playerObj) {
    return this.httpClient.put(this.playerURL + "/" + playerObj.id, playerObj);
  }
}
