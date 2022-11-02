import { Routes } from '@angular/router';
import { PurchasesSearchComponent } from './purchases-search/purchases-search.component';

export const PURCHASES_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'app-purchases-search',
      pathMatch: 'full'
    },
    {
      path: 'app-purchases-search',
      component: PurchasesSearchComponent
    }
]