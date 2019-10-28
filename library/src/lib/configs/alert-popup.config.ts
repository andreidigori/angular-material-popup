import { InjectionToken } from '@angular/core';
import { PopupConfig } from './popup.config';

export interface AlertPopupConfig extends PopupConfig {
  content?: string;
}

export const ALERT_POPUP_CONFIG = new InjectionToken<AlertPopupConfig>('alert-popup-config', {
  factory: () => ({
    color: 'primary',
    okButton: 'OK',
    title: 'Alert!'
  })
});
