import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AlertPopupService } from './services/alert-popup.service';
import { ConfirmPopupService } from './services/confirm-popup.service';
import { PromptPopupService } from './services/prompt-popup.service';

@NgModule({
  declarations: [
    AlertComponent,
    ConfirmComponent,
    PromptComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AlertPopupService,
    ConfirmPopupService,
    PromptPopupService
  ],
  entryComponents: [
    AlertComponent,
    ConfirmComponent,
    PromptComponent
  ]
})
export class PopupModule { }
