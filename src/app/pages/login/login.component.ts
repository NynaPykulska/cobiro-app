import { Component, OnInit } from '@angular/core';
import {UserService} from '../../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  hidePassword = true;
  newUser = true;

  username: string;
  password: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  confirmUser() {
    this.newUser ? this.userService.registerUser() : this.userService.logInUser();
  }

}
