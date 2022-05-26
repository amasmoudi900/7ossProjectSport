import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ScoreComponent } from './components/score/score.component';
import { NewsComponent } from './components/news/news.component';
import { ResultComponent } from './components/result/result.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { ArticleComponent } from './components/article/article.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { TeamsComponent } from './components/teams/teams.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AdminComponent } from './components/admin/admin.component';
import { MatchesTableComponent } from './components/matches-table/matches-table.component';
import { PlayersTableComponent } from './components/players-table/players-table.component';
import { TeamsTableComponent } from './components/teams-table/teams-table.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { AsterixPipe } from './pipes/asterix.pipe';
import { HttpClientModule } from "@angular/common/http";
import { WeatherComponent } from './components/weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    LogoComponent,
    NavComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    ResultComponent,
    BlogComponent,
    InfoComponent,
    MatchesComponent,
    ArticleComponent,
    PlayersComponent,
    PlayerComponent,
    TeamsComponent,
    AddMatchComponent,
    AddPlayerComponent,
    AdminComponent,
    MatchesTableComponent,
    PlayersTableComponent,
    TeamsTableComponent,
    DisplayMatchComponent,
    EditPlayerComponent,
    ReversePipe,
    AsterixPipe,
    WeatherComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
