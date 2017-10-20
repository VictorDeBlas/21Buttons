import { Injectable } from '@angular/core';
import { Http, } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GameDetailService {

  constructor(private http: Http) {}

  public getGameInfo(gameUri:string) {
      return this.makeRequest(gameUri);
  }

  public getPlayerInfo(playerUri) {
    return this.makeRequest(playerUri);
  }

  private makeRequest(uri: string) {
    return this.http.get(uri)
      .map((res) => res.json());
  }
}
