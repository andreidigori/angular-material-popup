import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmPopup } from './confirm-popup';

const dialogSpy = jasmine.createSpyObj<MatDialog>({
  open: {
    afterClosed: () => {}
  }
});

describe('ConfirmPopup', () => {
  let service: ConfirmPopup;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConfirmPopup,
        { provide: MatDialog, useValue: dialogSpy }
      ]
    });
    service = TestBed.get(ConfirmPopup);
    dialog = TestBed.get(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show dialog by string message', () => {
    service.show('Default question');
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should show dialog by config', () => {
    service.show({
      content: 'Default question'
    });
    expect(dialog.open).toHaveBeenCalled();
  });
});
