import { Component } from '@angular/core';
import { MatDialogRef } from '@app/material';

@Component({
  selector: 'app-lazy-dialog',
  templateUrl: './lazy-dialog.component.html',
  styleUrl: './lazy-dialog.component.scss'
})
export class LazyDialogComponent {

  constructor(private dialog: MatDialogRef<LazyDialogComponent>) { }

  close() {
    this.dialog.close();
  }
}
