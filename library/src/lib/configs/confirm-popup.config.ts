import { InjectionToken } from '@angular/core';
import { PopupConfig } from './popup.config';

export interface ConfirmPopupConfig extends PopupConfig {
  cancelButton?: string;
  content?: string;
}

export const CONFIRM_POPUP_CONFIG = new InjectionToken<ConfirmPopupConfig>('confirm-popup-config');
