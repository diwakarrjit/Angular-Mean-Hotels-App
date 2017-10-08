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
  hotelInfo: any;
  params: ParamMap;
  hotelId: any;
  constructor(private  _dataService:DataService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    // this.hotelId = this.route.snapshot.params['id'];
        // Access the Data Service's getUsers() method we defined
        this._dataService.gethotelInfo(this.route.snapshot.params['id'])
        .subscribe(res => this.hotelInfo = res);
  }

}
