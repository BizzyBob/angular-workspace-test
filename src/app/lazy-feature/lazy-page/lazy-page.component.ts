import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@app/material';
import { LazyDialogComponent } from '../lazy-dialog/lazy-dialog.component';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  styleUrl: './lazy-page.component.scss'
})
export class LazyPageComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  showFromTemplate(dialogTmpl: TemplateRef<any>) {
    this.dialog.open(dialogTmpl).afterClosed().subscribe(
      result => console.log('[Confirm]', result)
    );
  }

  showFromComponent() {
    this.dialog.open(LazyDialogComponent);
  }
    
}
