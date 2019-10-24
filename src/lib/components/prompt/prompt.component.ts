import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromptPopupConfig } from '../../configs/prompt-popup.config';

@Component({
  selector: 'popup-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.scss']
})
export class PromptComponent {

  inputForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: PromptPopupConfig,
    private dialogRef: MatDialogRef<PromptComponent, string>,
    private fb: FormBuilder
  ) {
    if (!Array.isArray(this.data.inputs)) {
      this.data.inputs = [this.data.inputs];
    }
    this.inputForm = this.fb.group({
      values: this.fb.array(this.data.inputs.map(input => {
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
