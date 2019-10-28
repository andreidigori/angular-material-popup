import { TestBed } from '@angular/core/testing';

import { AlertPopup } from './alert-popup';

describe('AlertPopup', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertPopup = TestBed.get(AlertPopup);
    expect(service).toBeTruthy();
  });
});
