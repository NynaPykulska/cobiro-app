import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {UserService} from '../../shared/services/user.service';
import {instance, mock} from 'ts-mockito';
import {BrowserModule, By} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const userServiceMock = mock(UserService);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        FormsModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        {provide: UserService, useValue: instance(userServiceMock)}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should render register page', () => {
    component.newUser = true;
    fixture.detectChanges();
    const titleElements = fixture.debugElement.queryAll(By.css('.mat-title'));
    const formFields = fixture.debugElement.queryAll(By.css('.mat-form-field'));
    const buttons = fixture.debugElement.queryAll(By.css('.mat-stroked-button'));
    expect(titleElements.length).toBe(1);
    expect(formFields.length).toBe(5);
    expect(buttons.length).toBe(2);
    expect((<HTMLElement>titleElements[0].nativeElement).innerText).toBe('Register');
    expect((<HTMLElement>buttons[0].nativeElement).innerText).toBe('I have an account');
    expect((<HTMLElement>buttons[1].nativeElement).innerText).toBe('Register');
  });

  it('should render login page', () => {
    component.newUser = false;
    fixture.detectChanges();
    const titleElements = fixture.debugElement.queryAll(By.css('.mat-title'));
    const formFields = fixture.debugElement.queryAll(By.css('.mat-form-field'));
    const buttons = fixture.debugElement.queryAll(By.css('.mat-stroked-button'));
    expect(titleElements.length).toBe(1);
    expect(formFields.length).toBe(2);
    expect(buttons.length).toBe(2);
    expect((<HTMLElement>titleElements[0].nativeElement).innerText).toBe('Log in');
    expect((<HTMLElement>buttons[0].nativeElement).innerText).toBe('I don\'t have an account');
    expect((<HTMLElement>buttons[1].nativeElement).innerText).toBe('Log in');
  });

});
