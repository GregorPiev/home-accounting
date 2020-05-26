import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { AuthGuard } from './shared/services/auth.guard';
import { funcNames } from './colors';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule
  ],
  providers: [UsersService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
