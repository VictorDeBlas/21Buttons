import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { GameListDetailService} from './game-list-detail.service';

@Component({
  selector: 'game-list-detail',
  templateUrl: './game-list-detail.component.html'
})
export class GameListDetailComponent {

    @Input() gameDetailData: any;

    constructor(public gameListDetailService: GameListDetailService, private router: Router) {}

    public openGameStats(): void {
      this.gameListDetailService.setGameDetailData(this.gameDetailData);
      this.router.navigate(['/detail', this.gameDetailData.id]);
    }
}
