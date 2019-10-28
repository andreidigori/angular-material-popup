import { InjectionToken } from '@angular/core';
import { PromptPopupConfig } from '../configs/prompt-popup.config';

export const PROMPT_POPUP_CONFIG = new InjectionToken<PromptPopupConfig>('prompt-popup-config');