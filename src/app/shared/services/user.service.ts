import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {AuthData} from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: AuthData;

  constructor(private httpClient: HttpClient, private router: Router) { }

  isUserLoggedIn() {
    return !!this.userData;
  }

  registerUser(user: User) {
    this.httpClient.post<User>('https://api.test-cobiro.com/api/v1/register', user).subscribe(
      _registeredUser => this.logInUser(user)
    );
  }

  logInUser(user: User) {
    this.httpClient.post<AuthData>('https://api.test-cobiro.com/api/v1/login', user).subscribe(
      (authData: AuthData) => {
        this.userData = authData;
        this.router.navigate(['/sites']);
      }
    );
  }
}
