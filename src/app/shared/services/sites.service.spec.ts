import { TestBed } from '@angular/core/testing';

import { SitesService } from './sites.service';
import {instance, mock} from 'ts-mockito';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';

describe('SitesService', () => {

  const httpClientMock = mock(HttpClient);
  const userServiceMock = mock(UserService);


  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: HttpClient, useValue: instance(httpClientMock) },
      {provide: UserService, useValue: instance(userServiceMock) },
    ]
  }));

  it('should be created', () => {
    const service: SitesService = TestBed.get(SitesService);
    expect(service).toBeTruthy();
  });
});
