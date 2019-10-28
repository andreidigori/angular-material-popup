import { Component, Inject, Optional } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmPopupConfig, CONFIRM_POPUP_CONFIG } from '../../configs/confirm-popup.config';

@Component({
  selector: 'popup-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  config: ConfirmPopupConfig;

  constructor(
    @Inject(CONFIRM_POPUP_CONFIG) defaults: ConfirmPopupConfig,
    @Optional() @Inject(MAT_DIALOG_DATA) data: ConfirmPopupConfig
  ) {
    this.config = {
      ...defaults,
      ...data
    };
  }
}
