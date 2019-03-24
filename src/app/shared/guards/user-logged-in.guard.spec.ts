import { TestBed, async, inject } from '@angular/core/testing';

import { UserLoggedInGuard } from './user-logged-in.guard';
import {instance, mock} from 'ts-mockito';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';

describe('UserLoggedInGuard', () => {

  const userServiceMock = mock(UserService);
  const routerMock = mock(Router);


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserLoggedInGuard,
        {provide: UserService, useValue: instance(userServiceMock)},
        {provide: Router, useValue: instance(routerMock)}
      ]
    });
  });

  it('should ...', inject([UserLoggedInGuard], (guard: UserLoggedInGuard) => {
    expect(guard).toBeTruthy();
  }));
});
