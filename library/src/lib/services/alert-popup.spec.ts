import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { AlertPopup } from './alert-popup';

const dialogSpy = jasmine.createSpyObj<MatDialog>({
  open: {
    afterClosed: () => {}
  }
});

describe('AlertPopup', () => {
  let service: AlertPopup;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlertPopup,
        { provide: MatDialog, useValue: dialogSpy }
      ]
    });
    service = TestBed.get(AlertPopup);
    dialog = TestBed.get(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show dialog by string message', () => {
    service.show('Default message');
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should show dialog by config', () => {
    service.show({
      content: 'Default message'
    });
    expect(dialog.open).toHaveBeenCalled();
  });
});
