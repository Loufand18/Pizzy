import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'aceuil',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
 /* {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },*/
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  { path: 'slide', loadChildren: './pages/slide/slide.module#SlidePageModule' },
  { path: 'aceuil', loadChildren: './pages/aceuil/aceuil.module#AceuilPageModule' },
  { path: 'inscription', loadChildren: './pages/inscription/inscription.module#InscriptionPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'aide', loadChildren: './pages/aide/aide.module#AidePageModule' },
  { path: 'validation', loadChildren: './pages/validation/validation.module#ValidationPageModule' },
  { path: 'pay', loadChildren: './pages/pay/pay.module#PayPageModule' },
  { path: 'local', loadChildren: './pages/local/local.module#LocalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
