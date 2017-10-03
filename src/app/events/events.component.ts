import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import {FormGroup,FormControl,FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DataService]

})
export class EventsComponent implements OnInit {
  eventForm:FormGroup;
  hotels: Array<any>;
  constructor(private  _dataService:DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.gethotels()
      .subscribe(res => this.hotels = res);
  }

  ngOnInit():void {
    this.eventForm = new FormGroup({
      eventName: new  FormControl(),
      company: new  FormControl(),
      address: new  FormControl(),
      email: new  FormControl(),
      phone: new  FormControl(),
      Description: new  FormControl(),
      eventDate: new  FormControl(),
      capacity: new  FormControl(),
      rooms: new  FormControl()
    })

  }
  save(): void {
    console.log('Saved: ' + JSON.stringify(this.eventForm.value));
  }

}
