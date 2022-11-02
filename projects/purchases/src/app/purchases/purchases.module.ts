import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchasesSearchComponent } from './purchases-search/purchases-search.component';
import { RouterModule } from '@angular/router';
import { PURCHASES_ROUTES } from './purchases.routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PURCHASES_ROUTES)
  ],
  declarations: [
    PurchasesSearchComponent
  ]
})
export class PurchasesModule { }