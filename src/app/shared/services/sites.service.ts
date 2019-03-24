import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SitesService {

  constructor(private userService: UserService, private httpClient: HttpClient) { }

  getSitesForCurrentUser() {
    const options = this.userService.getHtpOptionsWithAuthorizationHeader();
    return this.httpClient.get('https://api.test-cobiro.com/api/v1/sites', options);
  }

  editSite(id: number, siteData) {
    const options = this.userService.getHtpOptionsWithAuthorizationHeader();
    return this.httpClient.patch('https://api.test-cobiro.com/api/v1/sites/' + id, siteData, options);
  }

}
