import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromptPopupConfig, PROMPT_POPUP_CONFIG } from './prompt-popup.config';

@Component({
  selector: 'popup-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent {

  inputForm: FormGroup;

  constructor(
    @Inject(PROMPT_POPUP_CONFIG) public config: PromptPopupConfig,
    @Inject(MAT_DIALOG_DATA) data: PromptPopupConfig,
    private dialogRef: MatDialogRef<PromptComponent, string>,
    private fb: FormBuilder
  ) {
    Object.assign(this.config, data);
    if (!Array.isArray(this.config.inputs)) {
      this.config.inputs = [this.config.inputs];
    }
    this.inputForm = this.fb.group({
      values: this.fb.array(this.config.inputs.map(input => {
        return [input.initialValue, input.validators];
      }))
    });
  }

  respond() {
    const values = this.inputForm.get('values').value;
    if (values.length === 1) {
      this.dialogRef.close(values[0]);
    } else {
      this.dialogRef.close(values);
    }
  }
}
