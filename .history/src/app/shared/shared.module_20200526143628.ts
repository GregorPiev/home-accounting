import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from './components/loader.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoaderComponent]
})

export class SharedModule {

}
