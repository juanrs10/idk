import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenciaComponent } from './conferencia.component';
import { ConferenciaDetailComponent } from './conferencia-detail/conferencia-detail.component';
import { ConferenciaListComponent } from './conferencia-list/conferencia-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ConferenciaComponent, ConferenciaDetailComponent, ConferenciaListComponent],
  exports: [ConferenciaComponent, ConferenciaDetailComponent, ConferenciaListComponent]
})
export class ConferenciaModule { }
