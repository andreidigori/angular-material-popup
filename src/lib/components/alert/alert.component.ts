import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertPopupConfig } from '../../configs/alert-popup.config';

@Component({
  selector: 'popup-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AlertPopupConfig
  ) { }
}
