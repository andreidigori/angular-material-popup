import { TestBed } from '@angular/core/testing';

import { ConfirmPopup } from './confirm-popup';

describe('ConfirmPopup', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmPopup = TestBed.get(ConfirmPopup);
    expect(service).toBeTruthy();
  });
});
