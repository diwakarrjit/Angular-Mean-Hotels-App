import { Injectable } from '@angular/core';
import { Http, Headers, Response,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  result:any;
  private headers = new Headers({'Content-Type': 'application/json'});
  private options = new RequestOptions({ headers: this.headers });
  constructor(private _http: Http) { }

  gethotels() {
    return this._http.get('http://localhost:3000/api/hotels').map(res => res.json());
  }
  gethotelInfo(id:any) {
    return this._http.get('http://localhost:3000/api/hotels/' + id).map(res => res.json());
  }

  registerUser(user){
    return this._http.post('http://localhost:3000/api/users/register',user, this.options).subscribe(res => res.json());
  }

}
