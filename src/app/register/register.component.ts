import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared/data.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HotelService} from "../shared/hotel.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[DataService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  hotelInfo: any;
  params: ParamMap
  hotelId: any;
  hotels: Array<any>;

  constructor(private _dataService:DataService,private route:ActivatedRoute,private commonService:HotelService) { }


  ngOnInit() {

    this._dataService.gethotelInfo(this.route.snapshot.params['id'])
      .subscribe(res => {
        this.hotelInfo = res;
        this.commonService.hotelInfo = this.hotelInfo;
      });
    this.registerForm = new  FormGroup({
      name: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      userName: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordAgain: new  FormControl('', [Validators.required, Validators.minLength(8)])



    })



  }

  get userName() {
    return this.registerForm.get('userName');

  }
  get password() {
    return this.registerForm.get('password');

  }
  get passwordAgain() {
    return this.registerForm.get('passwordAgain');

  }



  save(): void {
    console.log('Saved: ' + JSON.stringify(this.registerForm.value));
  }


}

