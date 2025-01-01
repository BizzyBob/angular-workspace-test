import { Component } from '@angular/core';
import { MatDialogRef } from '@app/material'; // null injector error when importing from alias
// import { MatDialogRef } from '@angular/material/dialog'; // works when importing from @angular/material

@Component({
  selector: 'app-federated-dialog',
  templateUrl: './federated-dialog.component.html',
  styleUrl: './federated-dialog.component.scss'
})
export class FederatedDialogComponent {
  
  constructor(private dialog: MatDialogRef<FederatedDialogComponent>) { }

  close() {
    this.dialog.close();
  }
}
