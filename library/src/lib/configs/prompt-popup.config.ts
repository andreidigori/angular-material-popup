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
