import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-hotel-display',
  templateUrl: './hotel-display.component.html',
  styleUrls: ['./hotel-display.component.css'],
  providers: [DataService]
})
export class HotelDisplayComponent implements OnInit {
// Define a hotel property to hold our user data
  hotels: Array<any>;
  params: ParamMap;
  hotelId: any;
  constructor(private  _dataService:DataService, private route: ActivatedRoute) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.gethotels()
      .subscribe(res => this.hotels = res);
  }

  ngOnInit() {
    this.hotelId = this.route.snapshot.params['id'];
  }

}
