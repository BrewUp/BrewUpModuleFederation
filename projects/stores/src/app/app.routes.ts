import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { 
        path: '', 
        component: HomeComponent, 
        pathMatch: 'full'
    },
    { 
        path: 'stores', 
        loadChildren: () => import('./stores/stores.module')
            .then(m => m.StoresModule)
    }
];