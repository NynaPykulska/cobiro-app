import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SitesComponent} from './sites.component';
import {HeaderComponent} from './header/header.component';
import {instance, mock} from 'ts-mockito';
import {SitesService} from '../../shared/services/sites.service';
import {UserService} from '../../shared/services/user.service';

describe('SitesComponent', () => {
  let component: SitesComponent;
  let fixture: ComponentFixture<SitesComponent>;

  beforeEach(async(() => {
    const sitesServiceMock = mock(SitesService);
    const userServiceMock = mock(UserService);

    TestBed.configureTestingModule({
      declarations: [SitesComponent, HeaderComponent],
      providers: [
        {provide: SitesService, useValue: instance(sitesServiceMock)},
        {provide: UserService, useValue: instance(userServiceMock)}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
