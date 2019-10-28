import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from './components/alert/alert.component';
import { AlertPopup } from './services/alert-popup';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule
  ],
  providers: [
    AlertPopup
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class AlertPopupModule { }
