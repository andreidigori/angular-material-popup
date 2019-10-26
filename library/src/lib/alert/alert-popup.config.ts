import { InjectionToken } from '@angular/core';

export interface AlertPopupConfig {
  content?: string;
  okButton?: string;
  title?: string;
}

export const ALERT_POPUP_CONFIG = new InjectionToken<AlertPopupConfig>('alert-popup-config', {
  factory: () => ({
    okButton: 'OK',
    title: 'Alert!'
  })
});
