import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FederatedDialogComponent } from './federated-dialog/federated-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private dialog: MatDialog
  ) { }

  showFromTemplate(dialogTmpl: TemplateRef<any>) {
    this.dialog.open(dialogTmpl).afterClosed().subscribe(
      result => console.log('[Confirm]', result)
    );
  }

  showFromComponent() {
    this.dialog.open(FederatedDialogComponent);
  }
}
