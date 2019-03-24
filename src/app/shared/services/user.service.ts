import { Injectable } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {INITIAL_SITES} from './data/site-data';
import {Router} from '@angular/router';
import {AuthData} from '../model/auth.model';
import {forkJoin, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userData: AuthData;

  constructor(private httpClient: HttpClient, private router: Router) { }

  isUserLoggedIn() {
    return !!this.userData;
  }

  getCustomerData() {
    return this.userData.customer;
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
        forkJoin(this.createInitialSitesForUser()).subscribe(results => {
          console.log('created sites: ', results);
          this.router.navigate(['/sites']);
        });
      }
    );
  }

  private createInitialSitesForUser() {
    const options = this.getHtpOptionsWithAuthorizationHeader();
    const observables = [];
    INITIAL_SITES.forEach(site => observables.push(
      this.httpClient.post('https://api.test-cobiro.com/api/v1/site', site, options))
    );
    return observables;
  }

  getHtpOptionsWithAuthorizationHeader() {
    return {
      headers: new HttpHeaders({
        'Authorization': this.userData.token_type + ' ' + this.userData.access_token
      })
    };
  }
}
