import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material';

const routes = [
  { path: '', component: LazyPageComponent }
];

@NgModule({
  declarations: [
    LazyPageComponent,
    LazyDialogComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class LazyFeatureModule { }
