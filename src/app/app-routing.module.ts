import { WeatherComponent } from './components/weather/weather.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { TeamsComponent } from './components/teams/teams.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // http://localhost:4200
  { path: '', component: HomeComponent },
  // http://localhost:4200/login
  { path: 'login', component: LoginComponent },
  // http://localhost:4200/signup
  { path: 'signup', component: SignupComponent },
  { path: 'signupAdmin', component: SignupComponent },
  // http://localhost:4200/matches
  { path: 'matches', component: MatchesComponent },
  // http://localhost:4200/allPlayers
  { path: 'allPlayers', component: PlayersComponent },
  // http://localhost:4200/teams
  { path: 'teams', component: TeamsComponent },
  // http://localhost:4200/addMatch
  { path: 'addMatch', component: AddMatchComponent },
  // http://localhost:4200/addPlayer
  { path: 'addPlayer', component: AddPlayerComponent },
  // http://localhost:4200/editPlayer/:id
  { path: 'editPlayer/:id', component: EditPlayerComponent },
  // http://localhost:4200/admin
  { path: 'admin', component: AdminComponent },
  // http://localhost:4200/displayMatch/param
  { path: 'displayMatch/:id', component: DisplayMatchComponent },
  // http://localhost:4200/editMatch/param
  { path: 'editMatch/:id', component: AddMatchComponent },
  { path: 'weather', component: WeatherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
