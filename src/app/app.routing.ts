import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {
    path: 'eazimate',
    loadChildren: () =>
      import('./modules/eazimate/eazimate.module').then(
        (m) => m.EazimateModule
      )
  },
  {
    path: 'aqct',
    loadChildren: () =>
      import('./modules/aqct-spa/aqct-spa.module').then(
        (m) => m.AqctSpaModule
      )
  },
];
