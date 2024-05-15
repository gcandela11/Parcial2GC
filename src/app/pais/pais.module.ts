import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisComponent } from './pais.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PaisComponent],
  exports: [PaisComponent]
})
export class PaisModule { }
