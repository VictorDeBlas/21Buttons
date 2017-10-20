import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { GamesService } from './games/games.service';
import { GameDetailService } from './game-detail/game-detail.service';
import { GameListDetailService } from './games/game-list-detial/game-list-detail.service';

import { GamesComponent } from './games/games.component';
import { GameListDetailComponent } from './games/game-list-detial/game-list-detail.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameListDetailComponent,
    GameDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    GamesService,
    GameDetailService,
    GameListDetailService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
