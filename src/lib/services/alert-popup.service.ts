import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../components/alert/alert.component';
import { AlertPopupConfig } from '../configs/alert-popup.config';

@Injectable()
export class AlertPopupService {

  defaults: AlertPopupConfig = {
    okButton: 'OK',
    title: 'Alert!'
  };

  constructor(
    private dialog: MatDialog
  ) { }

  show(config: AlertPopupConfig) {
    const dialogRef = this.dialog.open<AlertComponent, AlertPopupConfig, boolean>(AlertComponent, {
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
