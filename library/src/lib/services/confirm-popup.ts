import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ConfirmPopupConfig } from '../configs/confirm-popup.config';

@Injectable()
export class ConfirmPopup {

  constructor(
    private dialog: MatDialog
  ) { }

  show(message?: string | ConfirmPopupConfig) {
    if (typeof message === 'string') {
      message = {
        content: message
      };
    }
    const dialogRef = this.dialog.open<ConfirmComponent, ConfirmPopupConfig, boolean>(ConfirmComponent, {
      data: message,
      minWidth: '256px',
      restoreFocus: true
    });
    return dialogRef.afterClosed();
  }
}
