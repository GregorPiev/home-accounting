import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModile } from '../../shared/shared.module';
import { SystemRoutingModule} from './system-routing.module';

@NgModule({
  declarations: [],
  imports: [
      CommonModule,
   SharedModile
  ],
  exports: [
    SystemRoutingModule
  ]
})
export class SystemModule { }
