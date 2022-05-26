import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  // Adresse du serveur BE
  matchURL: string = "http://localhost:3000/matches";
  // httpClient: send request and return response
  constructor(private httpClient: HttpClient) { }

  // Req to get all objects ([{},{},{},{}])
  getAllMatches() {
    return this.httpClient.get<{ matchesKey: any }>(this.matchURL);
  }
  // Req to get match by id ({})
  getMatchById(id) {
    return this.httpClient.get<{ match: any }>(`${this.matchURL}/${id}`);
    // return this.httpClient.get(this.matchURL + "/" + id);
  }
  // Req to delete match by id
  deleteMatchById(id) {
    return this.httpClient.delete<{message:string}>(`${this.matchURL}/${id}`);
  }
  // Req to add match
  addMatch(matchObj) {
    return this.httpClient.post(this.matchURL, matchObj);
  }
  // Req to edit match (matchObj: new object)
  editMatch(matchObj) {
    return this.httpClient.put(this.matchURL + "/" + matchObj.id, matchObj);
  }
}
