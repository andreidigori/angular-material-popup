import { TestBed } from '@angular/core/testing';

import { AlertPopupService } from './alert-popup.service';

describe('AlertPopupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertPopupService = TestBed.get(AlertPopupService);
    expect(service).toBeTruthy();
  });
});
