import { Injectable } from '@angular/core';
import 'server/data/hotels.model.js';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  gethotels() {
    return this._http.get('/api/hotels')
      .map(result => this.result = result.json().data);
  }

}
