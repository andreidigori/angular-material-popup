import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PromptComponent } from './prompt.component';
import { PromptPopupConfig } from './prompt-popup.config';

@Injectable()
export class PromptPopupService {

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
