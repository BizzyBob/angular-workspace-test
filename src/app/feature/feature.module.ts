import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    PageComponent,
    DialogComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class FeatureModule { }
