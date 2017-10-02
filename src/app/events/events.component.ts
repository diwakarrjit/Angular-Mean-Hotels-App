import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../server/data/data.service";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  hotels: Array<any>;
  constructor(private  _dataService:DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.gethotels()
      .subscribe(res => this.hotels = res);
  }

  ngOnInit() {
  }

}
