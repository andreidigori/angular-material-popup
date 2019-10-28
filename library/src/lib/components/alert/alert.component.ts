import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertPopupConfig } from '../../configs/alert-popup.config';
import { ALERT_POPUP_CONFIG } from '../../tokens/alert-popup.token';

@Component({
  selector: 'popup-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  config: AlertPopupConfig = {
    color: 'primary',
    okButton: 'OK',
    title: `${location.host} says`
  };

  constructor(
    @Optional() @Inject(ALERT_POPUP_CONFIG) defaults: AlertPopupConfig,
    @Optional() @Inject(MAT_DIALOG_DATA) data: AlertPopupConfig
  ) {
    Object.assign(this.config, defaults, data);
  }
}
