import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { PromptPopup } from './prompt-popup';

const dialogSpy = jasmine.createSpyObj<MatDialog>({
  open: {
    afterClosed: () => {}
  }
});

describe('PromptPopup', () => {
  let service: PromptPopup;
  let dialog: MatDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PromptPopup,
        { provide: MatDialog, useValue: dialogSpy }
      ]
    });
    service = TestBed.get(PromptPopup);
    dialog = TestBed.get(MatDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should show dialog by string message', () => {
    service.show('Default question', 'Initial');
    expect(dialog.open).toHaveBeenCalled();
  });

  it('should show dialog by config', () => {
    service.show({
      inputs: {
        initialValue: 'Initial',
        label: 'Default question'
      }
    });
    expect(dialog.open).toHaveBeenCalled();
  });
});
