[![npm version](https://badge.fury.io/js/ngx-material-popup.svg)](https://badge.fury.io/js/ngx-material-popup)
[![Build Status](https://travis-ci.org/andreidigori/ngx-material-popup.svg?branch=master)](https://travis-ci.org/andreidigori/ngx-material-popup)
[![Coverage Status](https://coveralls.io/repos/github/andreidigori/ngx-material-popup/badge.svg?branch=master)](https://coveralls.io/github/andreidigori/ngx-material-popup?branch=master)

# NGX-Material-Popup

A collection of popup boxes for [Angular](https://angular.io/) built with [Angular Material](https://material.angular.io/). It follows guidelines of [Material Design](https://material.io/), in particular [Dialogs](https://material.io/components/dialogs/).

## Installation

```bash
npm install --save ngx-material-popup
```

## Use Example

`ngx-material-popup` exports 3 modules (alert, confirm, prompt). Import which one you'll want to use in your application.

```typescript
import {
  AlertPopupModule,
  ConfirmPopupModule,
  PromptPopupModule
} from 'ngx-material-popup';

...
@NgModule({
  ...
  imports: [
    ...
    AlertPopupModule,
    ConfirmPopupModule,
    PromptPopupModule,
    ...
  ],
  ...
})
export class AppModule { }
```

> **Note:** You can import these modules as well as in child modules.

Next, in your component inject services exported from `ngx-material-popup` - `AlertPopup`, `ConfirmPopup`, `PromptPopup`. For example:

```typescript
constructor(
  ...
  private alertPopup: AlertPopup,
  private confirmPopup: ConfirmPopup,
  private promptPopup: PromptPopup,
  ...
) { }
```

### Show an alert popup

> To show an alert popup in browser: `window.alert('Some message to display')`

To show an alert popup with this library, you have to call:
```typescript
this.alertPopup.show('Some message to display');
```

### Show a confirm box

```typescript
this.confirmPopup.show('Some question?');
```

### Show a prompt dialog

```typescript
this.promptPopup.show('Some question?', 'Initial value');
```

> Prompt popups has textfields, which accordingly to [mat-form-field](https://material.angular.io/components/form-field/overview) can have multiple appearances.
To override the appearance see example below:

```typescript
providers: [
  ...
  { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
  ...
]
```

## Configuring popups

All these popups can be configured in 2 ways:
1. Call `show` method with config object

```typescript
this.alertPopup.show(config);
this.confirmPopup.show(config);
this.promptPopup.show(config);
```

2. Set default config in providers

```typescript
providers: [
  ...
  { provide: ALERT_POPUP_CONFIG, useValue: { ... } },
  { provide: CONFIRM_POPUP_CONFIG, useValue: { ... } },
  { provide: PROMPT_POPUP_CONFIG, useValue: { ... } },
  ...
]
```

All configs are different for each type of popup: `AlertPopupConfig`, `ConfirmPopupConfig` and `PromptPopupConfig`.

___

## Serving demo app

Run `npm start` to start demo app server. Navigate to `http://localhost:4200/`.

## Build

Run `npm run build` to build the library. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `npm test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Author

[Andrei Digori](https://github.com/andreidigori)

## Licence

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
