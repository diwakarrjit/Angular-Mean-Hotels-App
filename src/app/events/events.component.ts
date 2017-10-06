import {Component, OnInit} from '@angular/core';
import {DataService} from '../shared/data.service';
import {FormGroup, FormControl, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [DataService]

})
export class EventsComponent implements OnInit {
  eventForm: FormGroup;
  hotels: Array<any>;

  constructor(private  _dataService: DataService) {
    // Access the Data Service's getUsers() method we defined
    this._dataService.gethotels()
      .subscribe(res => this.hotels = res);
  }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      eventName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      company: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]),
      phone: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Description: new FormControl(),
      eventDate: new FormControl('', [Validators.required, Validators.minLength(5)]),
      capacity: new FormControl(),
      rooms: new FormControl('', [Validators.required, Validators.minLength(5)]),
      inputAddress: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+')]),
      inputCity: new FormControl('', [Validators.required, Validators.minLength(5)]),
      inputState: new FormControl('', [Validators.required, Validators.minLength(5)]),
      inputZip: new FormControl('', [Validators.required, Validators.minLength(5)]),


    })
  }

  get eventName() {
    return this.eventForm.get('eventName');
  }

  get company() {
    return this.eventForm.get('company');
  }

  get inputAddress() {
    return this.eventForm.get('inputAddress');
  }

  get email() {
    return this.eventForm.get('email');
  }

  get rooms() {
    return this.eventForm.get('rooms');
  }

  get capacity() {
    return this.eventForm.get('capacity');
  }

  get inputCity() {
    return this.eventForm.get('inputCity');
  }

  get inputState() {
    return this.eventForm.get('inputState');
  }

  get inputZip() {
    return this.eventForm.get('inputZip');
  }


  save(): void {
    console.log('Saved: ' + JSON.stringify(this.eventForm.value));
  }

}
