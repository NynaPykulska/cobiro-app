import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SitesComponent} from './sites.component';
import {HeaderComponent} from './header/header.component';
import {instance, mock, when} from 'ts-mockito';
import {SitesService} from '../../shared/services/sites.service';
import {UserService} from '../../shared/services/user.service';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material';
import {of} from 'rxjs';

describe('SitesComponent', () => {
  let component: SitesComponent;
  let fixture: ComponentFixture<SitesComponent>;
  let sitesServiceMock;
  let userServiceMock;


  beforeEach(async(() => {
    sitesServiceMock = mock(SitesService);
    userServiceMock = mock(UserService);

    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatCardModule
      ],
      declarations: [SitesComponent, HeaderComponent],
      providers: [
        {provide: SitesService, useValue: instance(sitesServiceMock)},
        {provide: UserService, useValue: instance(userServiceMock)}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    when(userServiceMock.getCustomerData()).thenReturn({first_name: 'Mary', last_name: 'Poppins'});
    fixture = TestBed.createComponent(SitesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    when(sitesServiceMock.getSitesForCurrentUser()).thenReturn(of({sites: []}));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
