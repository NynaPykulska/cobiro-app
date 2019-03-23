import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  isUserLoggedIn() {
    return !!this.userData;
  }

  registerUser(user: User) {
    this.httpClient.post<User>('https://api.test-cobiro.com/api/v1/register', user).subscribe(
      registeredUser => this.logInUser(registeredUser)
    );
  }

  logInUser(user: User) {
    console.log('aaaaaaa');
    this.httpClient.post<User>('https://api.test-cobiro.com/api/v1/login', user).subscribe(
      loggedUser => {
        console.log('response', loggedUser);
        this.userData = loggedUser;
        this.router.navigate(['/sites']);
      }
    );
  }
}
