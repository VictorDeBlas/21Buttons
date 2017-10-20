import { Routes } from '@angular/router';

import { GamesComponent } from './games/games.component';
import { GameDetailComponent } from './game-detail/game-detail.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'games', component: GamesComponent },
  { path: 'detail', component: GameDetailComponent,
    children: [
      {path: '', component: GameDetailComponent},
      {path: ':id', component: GameDetailComponent}
    ]
  }
];

