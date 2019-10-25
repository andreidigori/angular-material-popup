import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmComponent } from '../components/confirm/confirm.component';
import { ConfirmPopupConfig } from '../configs/confirm-popup.config';

@Injectable()
export class ConfirmPopupService {

  defaults: ConfirmPopupConfig = {
    cancelButton: 'CANCEL',
    okButton: 'OK',
    title: 'Confirm?'
  };

  constructor(
    private dialog: MatDialog
  ) { }

  show(config: ConfirmPopupConfig) {
    const dialogRef = this.dialog.open<ConfirmComponent, ConfirmPopupConfig, boolean>(ConfirmComponent, {
      data: {
        ...this.defaults,
        ...config
      },
      minWidth: '256px',
      restoreFocus: true
    });
    return dialogRef.afterClosed();
  }
}
