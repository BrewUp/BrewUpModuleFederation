import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresListComponent } from './stores-list/stores-list.component';
import { RouterModule } from '@angular/router';
import { STORES_ROUTES } from './stores.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(STORES_ROUTES)
  ],
  declarations: [
    StoresListComponent
  ]
})
export class StoresModule { }