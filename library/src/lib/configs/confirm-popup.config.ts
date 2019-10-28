import { PopupConfig } from './popup.config';

export interface ConfirmPopupConfig extends PopupConfig {
  cancelButton?: string;
  content?: string;
}
