import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'config',
      component: ConfigComponent
    },
    {
      path: 'purchases',
      loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'purchases',
          exposedModule: './Module'
        })
        .then(m => m.PurchasesModule)
    },
    {
      path: 'stores',
      loadChildren: () => loadRemoteModule({
          type: 'manifest',
          remoteName: 'stores',
          exposedModule: './Module'
        })
        .then(m => m.StoresModule)
    },
];
