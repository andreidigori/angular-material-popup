import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from './alert.component';
import { AlertPopupConfig } from './alert-popup.config';

@Injectable()
export class AlertPopupService {

  constructor(
    private dialog: MatDialog
  ) { }

  show(config?: AlertPopupConfig) {
    const dialogRef = this.dialog.open<AlertComponent, AlertPopupConfig>(AlertComponent, {
      data: config,
      minWidth: '256px',
      restoreFocus: true
    });
    return dialogRef.afterClosed();
  }
}
