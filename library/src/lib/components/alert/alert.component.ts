import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertPopupConfig, ALERT_POPUP_CONFIG } from '../../configs/alert-popup.config';

@Component({
  selector: 'popup-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  config: AlertPopupConfig;

  constructor(
    @Inject(ALERT_POPUP_CONFIG) defaults: AlertPopupConfig,
    @Optional() @Inject(MAT_DIALOG_DATA) data: AlertPopupConfig
  ) {
    this.config = {
      ...defaults,
      ...data
    };
  }
}
