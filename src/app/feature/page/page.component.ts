import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class PageComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  showFromTemplate(dialogTmpl: TemplateRef<any>) {
    this.dialog.open(dialogTmpl).afterClosed().subscribe(
      result => console.log('[Confirm]', result)
    );
  }

  showFromComponent() {
    this.dialog.open(DialogComponent);
  }

}
