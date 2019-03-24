import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  user: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    const customer = this.userService.getCustomerData();
    this.user = customer.first_name + ' ' + customer.last_name;
  }

}
