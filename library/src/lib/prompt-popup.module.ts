import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PromptComponent } from './components/prompt/prompt.component';
import { PromptPopup } from './services/prompt-popup';

@NgModule({
  declarations: [
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
    PromptPopup
  ],
  entryComponents: [
    PromptComponent
  ]
})
export class PromptPopupModule { }
