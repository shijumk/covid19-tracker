import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetCovidDataService {

  constructor(private http: HttpClient) { }

  private configUrl = 'https://nepalcorona.info/api/v1/data/world';

  getConfig() {
    return this.http.get(this.configUrl);
  }
}
