import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './alert.component';
import { AlertPopupService } from './alert-popup.service';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    AlertPopupService
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class AlertPopupModule { }
