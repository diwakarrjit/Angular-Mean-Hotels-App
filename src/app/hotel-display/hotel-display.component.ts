import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../server/data/data.service";

@Component({
  selector: 'app-hotel-display',
  templateUrl: './hotel-display.component.html',
  styleUrls: ['./hotel-display.component.css']
})
export class HotelDisplayComponent implements OnInit {
// Define a users property to hold our user data
  hotels: Array<any>;
  constructor(private  _dataService:DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.gethotels()
      .subscribe(res => this.hotels = res);
  }

  ngOnInit() {
  }

}
