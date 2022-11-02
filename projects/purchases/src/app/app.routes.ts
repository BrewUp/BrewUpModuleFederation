import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'purchases', 
        loadChildren: () => import('./purchases/purchases.module')
            .then(m => m.PurchasesModule)
    }
];