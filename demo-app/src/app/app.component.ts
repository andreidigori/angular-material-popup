import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  AlertPopup,
  ConfirmPopup,
  PromptPopup,
  AlertPopupConfig,
  ConfirmPopupConfig,
  PromptPopupConfig,
  PromptPopupInput
} from 'ngx-material-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  alertConfig: AlertPopupConfig = {
    color: 'accent',
    content: 'This is a configured alert popup.\nIt supports multiline content text.',
    okButton: 'GOT IT!',
    title: 'Boost Alert'
  };
  confirmConfig: ConfirmPopupConfig = {
    cancelButton: 'IT NEEDS WORK',
    color: 'accent',
    content: 'This is a configured confirm popup.\nLike alert popup, it also supports multiline content text.\nSo, is this library useful?',
    okButton: 'YEAH!!!!1',
    title: 'Boost Confirm'
  };
  promptConfig: PromptPopupConfig = {
    cancelButton: 'DISMISS',
    color: 'accent',
    inputs: [
      {
        label: 'Username',
        placeholder: 'Enter your username',
        validators: Validators.required
      },
      {
        inputType: 'password',
        label: 'Password',
        placeholder: 'Enter your password',
        validators: Validators.required
      },
      {
        initialValue: 'Just a sample multiline input.',
        label: 'Comment',
        multiline: true
      }
    ],
    okButton: 'ENTER',
    title: 'Boost Prompt'
  };
  result: any;

  constructor(
    private alertPopup: AlertPopup,
    private confirmPopup: ConfirmPopup,
    private promptPopup: PromptPopup
  ) { }

  showNativeAlert() {
    this.result = window.alert('Default alert');
  }

  showDefaultAlert() {
    const popup$ = this.alertPopup.show('Default alert');
    popup$.subscribe(result => this.result = result);
  }

  showAlert(config: AlertPopupConfig) {
    const popup$ = this.alertPopup.show(config);
    popup$.subscribe(result => this.result = result);
  }

  showNativeConfirm() {
    this.result = window.confirm('Default confirm');
  }

  showDefaultConfirm() {
    const popup$ = this.confirmPopup.show('Default confirm');
    popup$.subscribe(result => this.result = result);
  }

  showConfirm(config: ConfirmPopupConfig) {
    const popup$ = this.confirmPopup.show(config);
    popup$.subscribe(result => this.result = result);
  }

  showNativePrompt() {
    this.result = window.prompt('Default prompt', 'Some value');
  }

  showDefaultPrompt() {
    const popup$ = this.promptPopup.show('Default prompt', 'Some value');
    popup$.subscribe(result => this.result = result);
  }

  showPrompt(config: PromptPopupConfig) {
    const popup$ = this.promptPopup.show(config);
    popup$.subscribe(result => this.result = result);
  }
}
