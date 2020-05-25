import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { funcNames } from './colors';
import { BillPageComponent } from './system/bill-page/bill-page.component';
import { HistoryPageComponent } from './system/history-page/history-page.component';
import { PlanningPageComponent } from './system/planning-page/planning-page.component';
import { RecordsPageComponent } from './system/records-page/records-page.component';
import { SystemModule } from './system/system/system.module';


@NgModule({
  declarations: [
    AppComponent,
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    AppRoutingModule,
    SystemModule
  ],
  providers: [UsersService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
