import {Component, OnInit} from '@angular/core';
import {GamesService} from './games.service';

@Component({
  selector: 'games',
  styleUrls: ['./games.component.css'],
  templateUrl: './games.component.html'
})
export class GamesComponent implements OnInit {

  public dataLoading: boolean = true;
  public existError: boolean = false;
  public gameList: Array<any> = [];
  
  constructor(public gamesService: GamesService) { 
  }

  ngOnInit() {
    this.gamesService.getRunList()
      .subscribe( 
        response => this.processResponse(response),
        error => this.processError(error)
      );
  }

  private processResponse(dataList: any): void {
    this.dataLoading = false;
    this.gameList = dataList.data;
  }

  private processError(errorResponse: any): void {
    this.dataLoading = false;
    this.existError = true;
  }
}
