import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {SitesComponent} from './pages/sites/sites.component';
import {UserService} from './shared/services/user.service';
import {RouterModule, Routes} from '@angular/router';
import {UserLoggedInGuard} from './shared/guards/user-logged-in.guard';
import { HeaderComponent } from './pages/sites/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/sites',
    pathMatch: 'full'
  }, {
    path: 'sites',
    canActivate: [UserLoggedInGuard],
    component: SitesComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SitesComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
