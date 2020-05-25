import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModile } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/component/sidebar/sidebar.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { DropdownDirective } from './shared/directive/dropdown.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { BillServices } from './shared/services/bill.services';

@NgModule({
  declarations: [
    BillPageComponent,
    HistoryPageComponent,
    PlanningPageComponent,
    RecordsPageComponent,
    SystemComponent,
    SidebarComponent,
    HeaderComponent,
    DropdownDirective,
    BillCardComponent,
    CurrencyCardComponent
  ],
  imports: [
    CommonModule,
    SharedModile,
    SystemRoutingModule
  ],
  exports: [
    SystemRoutingModule
  ],
  providers: [
    BillServices
  ]
})
export class SystemModule { }
