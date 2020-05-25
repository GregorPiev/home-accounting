import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModile } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [RegistrationComponent, AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModile
  ]
})
export class AuthModule { }
