import { InjectionToken } from '@angular/core';

export interface ConfirmPopupConfig {
  cancelButton?: string;
  content?: string;
  okButton?: string;
  title?: string;
}

export const CONFIRM_POPUP_CONFIG = new InjectionToken<ConfirmPopupConfig>('confirm-popup-config', {
  factory: () => ({
    cancelButton: 'CANCEL',
    okButton: 'OK',
    title: 'Confirm?'
  })
});
