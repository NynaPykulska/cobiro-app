import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  newUser = true;

  email: string;
  password: string;
  name: string;
  surname: string;
  countryCode: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  confirmUser() {
    const user: User = {
      country_code: this.countryCode,
      email: this.email,
      first_name: this.name,
      last_name: this.surname,
      password: this.password,
    };
    console.log('user', user);
    this.newUser ? this.userService.registerUser(user) : this.userService.logInUser(user);
  }

}
