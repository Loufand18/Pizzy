import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
  path: '',
  redirectTo: '/settings/home',
  pathMatch: 'full'
  },
  {
    path: '',
    component: SettingsPage,
    children: [
      { path: 'aceuil', loadChildren: '../aceuil/aceuil.module#AceuilPageModule' },
      { path: 'aide', loadChildren: '../aide/aide.module#AidePageModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SettingsPage]
})
export class SettingsPageModule {}
