import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmComponent } from './confirm.component';
import { ConfirmPopupService } from './confirm-popup.service';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    ConfirmPopupService
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class ConfirmPopupModule { }
