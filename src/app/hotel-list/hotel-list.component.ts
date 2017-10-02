import { Component, OnInit } from '@angular/core';
import {DataService} from "../../../server/data/data.service";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
  providers: [DataService]
})
export class HotelListComponent implements OnInit {
  // Define a users property to hold our user data
  hotels: Array<any>;

  constructor(private  _dataService:DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.gethotels()
      .subscribe(res => this.hotels = res);
  }

  ngOnInit() {
  }
  getHotelDetails(hotel){
  }

}
