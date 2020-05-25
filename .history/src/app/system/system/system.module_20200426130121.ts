import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModile } from '../../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './../bill-page/bill-page.component';
import { HistoryPageComponent } from './../history-page/history-page.component';
import { PlanningPageComponent } from './../planning-page/planning-page.component';
import { RecordsPageComponent } from './../records-page/records-page.component';

@NgModule({
  declarations: [
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent
  ],
  imports: [

  CommonModule,
    SharedModile,
    SystemRoutingModule
  ],
  exports: [
    SystemRoutingModule
  ]
})
export class SystemModule { }
