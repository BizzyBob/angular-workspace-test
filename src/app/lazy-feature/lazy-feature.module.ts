import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyPageComponent } from './lazy-page/lazy-page.component';
import { LazyDialogComponent } from './lazy-dialog/lazy-dialog.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
    MatDialogModule,
    MatButtonModule,
  ]
})
export class LazyFeatureModule { }
