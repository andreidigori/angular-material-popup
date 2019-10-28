import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ConfirmPopup } from './services/confirm-popup';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    ConfirmPopup
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class ConfirmPopupModule { }
