import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent
  ],
  declarations: [NotFoundComponent]
})

export class SharedModule {

}
