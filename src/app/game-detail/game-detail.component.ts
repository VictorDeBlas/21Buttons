import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameDetailService} from './game-detail.service';
import {GameListDetailService} from '../games/game-list-detial/game-list-detail.service';

@Component({
  selector: 'game-detail',
  styleUrls: ['./game-detail.component.css'],
  templateUrl: './game-detail.component.html'
})
export class GameDetailComponent implements OnInit{

  public gameInfo: any = {};
  public runTime: string = '';
  public dataReady: boolean = false;
  public playerName: string = '';
  private gameId: string;
  private videoUrl: string = '';

  constructor(public gameDetailService: GameDetailService, public gameListDetailService: GameListDetailService, private route:ActivatedRoute) {
    // console.log(this.gameDetailListService.getGameDetailData());
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let gameData = this.gameListDetailService.getGameDetailData();
      this.gameInfo = gameData;
      this.gameId = params['id'] || '';

      if (this.gameId === '' || !gameData) {
        return;
      }
      let leaderboardUrl = gameData.links.filter(element => element.rel === 'leaderboard');
      if ( leaderboardUrl.length > 0 ) {
        this.gameDetailService.getGameInfo(leaderboardUrl[0].uri)
          .subscribe( response => {
            this.getRuns(response.data);
          });
      }
      this.dataReady = true;
    });
  }

  public watchVideo(): void{
    window.open(this.videoUrl, "_blank");
  }

  private getRuns(data: any):void {
    let firstRun: any = data.runs[0] || {},
        videoUrl: string = '',
        runTime: number = 0,
        playerInfo: any = {};

    if ( firstRun && firstRun.run ) {
      videoUrl = firstRun.run.videos.links[0].uri;
      runTime = firstRun.run.times.primary_t;
      playerInfo = firstRun.run.players[0];
    }
    
    this.videoUrl = videoUrl;
    this.getPlayerInfo(playerInfo);
    this.convertTimeToMinutes(runTime);
  }

  private convertTimeToMinutes(time: number):void {
    let resultInMinutes: string = '',
        hours: number,
        minutes: number,
        seconds: number;
    hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    minutes = Math.floor(time / 60);
    seconds = time - minutes * 60;
    resultInMinutes = ((hours) ? hours + ':' : '') + minutes + ':' + seconds;
    this.runTime = resultInMinutes;
  }

  private getPlayerInfo(playerData: any): void {
      this.gameDetailService.getPlayerInfo(playerData.uri)
        .subscribe(response => this.processPlayerResponse(response.data));
  }

  private processPlayerResponse(playerResponse): void {
    this.playerName = playerResponse.names.international;
  }
}
