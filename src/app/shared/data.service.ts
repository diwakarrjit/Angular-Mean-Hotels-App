import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  gethotels() {
    return this._http.get('http://localhost:3000/api/hotels').map(res => res.json());
  }
  gethotelInfo(id:any) {
    return this._http.get('http://localhost:3000/api/hotels/' + id).map(res => res.json());
  }

}
