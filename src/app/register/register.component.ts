import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {DataService} from "../shared/data.service";
import {ActivatedRoute} from "@angular/router";
import {HotelService} from "../shared/hotel.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [DataService]
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup
  hotelId: any;
  errorMsg: string;
  successMsg: string;

  constructor(private dataService: DataService, private route: ActivatedRoute, private commonService: HotelService,) {
  }


  ngOnInit() {


    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(8)]),
      userName: new FormControl('', [Validators.required, Validators.minLength(8)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      passwordAgain: new FormControl('', [Validators.required, Validators.minLength(8)])
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


  register = function () {
    let hotel = this

    var user = {
      username: hotel.userName.value,
      password: hotel.password.value,
      name: hotel.name.value
    };
    console.log(user);

    let body: string = JSON.stringify(user);
    if (!hotel.userName.value || !hotel.password.value) {
      this.errorMsg = 'Please add a username and a password.';

    } else {
      if (hotel.password.value !== hotel.passwordAgain.value) {
        this.errorMsg = 'Please make sure the passwords match.';
      } else {
        this.dataService.registerUser(body).subscribe(x => {
          this.errorMsg = "";
          this.successMsg = "Successful registration, please login";
        });

      }
    }
  }


}
