import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
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

  constructor(private dataService:DataService,private route:ActivatedRoute,private commonService:HotelService,) { }


  ngOnInit() {


    this.registerForm = new  FormGroup({
      name: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      userName: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new  FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordAgain: new  FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }
  get name() {
    return this.registerForm.get('name');

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



  register =  function () {
    let hotel = this

    var user = {
      username: hotel.username,
      password: hotel.password
    };
    if (!hotel.username || !hotel.password){
      hotel.error = 'Please add a username and a password.';

    } else {
      if (hotel.password !== hotel.passwordAgain) {
        hotel.error = 'Please make sure the passwords match.';
      } else {
        this.http.post('/api/users/register', user).then(function(result) {
          console.log(result);
          let hotelmessage ='Successful registration, please login';
          hotel.error = '';
        }).catch(function(error) {
          console.log(error);
        });
      }
    }
  }


}

