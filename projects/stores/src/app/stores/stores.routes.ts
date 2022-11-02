import { Routes } from '@angular/router';
import { StoresListComponent } from './stores-list/stores-list.component';

export const STORES_ROUTES: Routes = [
    {
      path: '',
      redirectTo: 'app-store-list',
      pathMatch: 'full'
    },
    {
      path: 'app-store-list',
      component: StoresListComponent
    }
]