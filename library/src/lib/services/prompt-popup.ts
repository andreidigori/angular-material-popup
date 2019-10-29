import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PromptComponent } from '../components/prompt/prompt.component';
import { PromptPopupConfig } from '../configs/prompt-popup.config';

@Injectable()
export class PromptPopup {

  constructor(
    private dialog: MatDialog
  ) { }

  show(message?: string, initial?: string): Observable<string | string[]>;
  show(config?: PromptPopupConfig): Observable<string | string[]>;
  show(message?: string | PromptPopupConfig, initial?: string) {
    if (typeof message === 'string') {
      message = {
        inputs: {
          initialValue: initial,
          label: message
        }
      };
    }
    const dialogRef = this.dialog.open<PromptComponent, PromptPopupConfig, string | string[]>(PromptComponent, {
      data: message,
      minWidth: '256px',
      restoreFocus: true
    });
    return dialogRef.afterClosed();
  }
}
