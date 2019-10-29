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
    this.result = window.alert(this.alertConfig.content);
  }

  showNativeConfirm() {
    this.result = window.confirm(this.confirmConfig.content);
  }

  showNativePrompt() {
    const input: PromptPopupInput = this.promptConfig.inputs[0];
    this.result = window.prompt(input.label, input.initialValue);
  }

  showAlert(config?: string | AlertPopupConfig) {
    const popup$ = this.alertPopup.show(config);
    popup$.subscribe(result => this.result = result);
  }

  showConfirm(config?: string | ConfirmPopupConfig) {
    const popup$ = this.confirmPopup.show(config);
    popup$.subscribe(result => this.result = result);
  }

  showPrompt(config?: string | PromptPopupConfig, init?: string) {
    const popup$ = this.promptPopup.show(config, init);
    popup$.subscribe(result => this.result = result);
  }
}
