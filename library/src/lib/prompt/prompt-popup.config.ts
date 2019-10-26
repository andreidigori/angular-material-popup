import { InjectionToken } from '@angular/core';
import { ValidatorFn } from '@angular/forms';

export interface PromptPopupInput {
  initialValue?: any;
  inputType?: string;
  label?: string;
  multiline?: boolean;
  placeholder?: string;
  validators?: ValidatorFn | ValidatorFn[];
}

export interface PromptPopupConfig {
  cancelButton?: string;
  okButton?: string;
  inputs?: PromptPopupInput | PromptPopupInput[];
  title?: string;
}

export const PROMPT_POPUP_CONFIG = new InjectionToken<PromptPopupConfig>('prompt-popup-config', {
  factory: () => ({
    cancelButton: 'CANCEL',
    inputs: {
      inputType: 'text',
      label: 'Answer'
    },
    okButton: 'OK',
    title: 'Prompt'
  })
});
