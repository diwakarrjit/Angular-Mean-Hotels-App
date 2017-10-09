import { HotelService } from './../hotel.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  constructor(public commonService: HotelService) {
    this.commonService.hotelStars = [];
  }

  ngOnInit() { }

}
