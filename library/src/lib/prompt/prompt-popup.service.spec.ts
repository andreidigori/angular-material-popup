import { TestBed } from '@angular/core/testing';

import { PromptPopupService } from './prompt-popup.service';

describe('PromptPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromptPopupService = TestBed.get(PromptPopupService);
    expect(service).toBeTruthy();
  });
});
