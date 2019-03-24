import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {instance, mock, when} from 'ts-mockito';
import {UserService} from '../../../shared/services/user.service';
import {By} from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let userServiceMock;

  beforeEach(async(() => {
    userServiceMock = mock(UserService);

    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
        {provide: UserService, useValue: instance(userServiceMock)}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    when(userServiceMock.getCustomerData()).thenReturn({first_name: 'Mary', last_name: 'Poppins'});
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render welcome message', () => {
    when(userServiceMock.getCustomerData()).thenReturn({first_name: 'Mary', last_name: 'Poppins'});
    fixture.detectChanges();
    const titleElements = fixture.debugElement.queryAll(By.css('.mat-title'));
    expect(titleElements.length).toBe(1);
    expect((<HTMLElement>titleElements[0].nativeElement).innerText).toBe('Welcome, Mary Poppins');
  });
});
