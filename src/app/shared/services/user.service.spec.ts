import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {instance, mock} from 'ts-mockito';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

describe('UserService', () => {

  const httpClientMock = mock(HttpClient);
  const routerMock = mock(Router);

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: HttpClient, useValue: instance(httpClientMock)},
      {provide: Router, useValue: instance(routerMock)}
    ]
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
