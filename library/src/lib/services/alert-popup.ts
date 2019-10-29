import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertPopupConfig } from '../configs/alert-popup.config';

@Injectable()
export class AlertPopup {

  constructor(
    private dialog: MatDialog
  ) { }

  show(message?: string | AlertPopupConfig) {
    if (typeof message === 'string') {
      message = {
        content: message
      };
    }
    const dialogRef = this.dialog.open<AlertComponent, AlertPopupConfig>(AlertComponent, {
      data: message,
      minWidth: '256px',
      restoreFocus: true
    });
    return dialogRef.afterClosed();
  }
}
