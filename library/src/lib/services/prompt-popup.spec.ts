import { TestBed } from '@angular/core/testing';

import { PromptPopup } from './prompt-popup';

describe('PromptPopup', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PromptPopup = TestBed.get(PromptPopup);
    expect(service).toBeTruthy();
  });
});
