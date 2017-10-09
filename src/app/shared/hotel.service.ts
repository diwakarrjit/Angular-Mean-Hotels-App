import { Injectable } from '@angular/core';

@Injectable()
export class HotelService {
  public hotelInfo: any = {};
  public hotelStars: Array<number> = [];
  constructor() { }
}
