import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { DialogComponent } from './dialog/dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PageComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FeatureModule { }
