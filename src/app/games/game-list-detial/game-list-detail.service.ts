import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GameListDetailService {

  private gameDetailData: any;
  constructor() {}

  public setGameDetailData(newData: any): void {
      this.gameDetailData = newData;
  }

  public getGameDetailData(): any {
      return this.gameDetailData;
  }
}
