import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GamesService {
  constructor(private http: Http) {}

  getRunList() {
      return this.makeRequest('api/v1/games');
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();

    let url = `https://www.speedrun.com/` + path;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
