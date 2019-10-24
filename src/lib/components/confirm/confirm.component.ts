import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmPopupConfig } from '../../configs/confirm-popup.config';

@Component({
  selector: 'popup-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmPopupConfig
  ) { }
}
