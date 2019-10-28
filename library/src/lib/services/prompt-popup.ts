import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromptComponent } from '../components/prompt/prompt.component';
import { PromptPopupConfig } from '../configs/prompt-popup.config';

@Injectable()
export class PromptPopup {

  constructor(
    private dialog: MatDialog
  ) { }

  show(config?: PromptPopupConfig) {
    const dialogRef = this.dialog.open<PromptComponent, PromptPopupConfig, string | string[]>(PromptComponent, {
      data: config,
      minWidth: '256px',
      restoreFocus: true
    });
    return dialogRef.afterClosed();
  }
}
