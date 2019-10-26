import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertPopupConfig, ALERT_POPUP_CONFIG } from './alert-popup.config';

@Component({
  selector: 'popup-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor(
    @Inject(ALERT_POPUP_CONFIG) public config: AlertPopupConfig,
    @Inject(MAT_DIALOG_DATA) data: AlertPopupConfig
  ) {
    Object.assign(this.config, data);
  }
}
