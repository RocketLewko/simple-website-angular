import { LayoutComponent } from './layout/layout.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: MainPageComponent }],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];
