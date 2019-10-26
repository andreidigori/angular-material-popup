import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmPopupConfig, CONFIRM_POPUP_CONFIG } from './confirm-popup.config';

@Component({
  selector: 'popup-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor(
    @Inject(CONFIRM_POPUP_CONFIG) public config: ConfirmPopupConfig,
    @Inject(MAT_DIALOG_DATA) data: ConfirmPopupConfig
  ) {
    Object.assign(this.config, data);
  }
}
