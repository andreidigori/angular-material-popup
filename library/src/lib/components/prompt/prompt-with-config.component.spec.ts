import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PromptComponent } from './prompt.component';
import { PROMPT_POPUP_CONFIG } from '../../tokens/prompt-popup.token';
import { PromptPopupConfig } from '../../configs/prompt-popup.config';

const promptPopupConfig: PromptPopupConfig = {
  inputs: [
    {
      label: 'Some label',
      initialValue: '...'
    }
  ]
};
const dialogRefSpy = jasmine.createSpyObj<MatDialogRef<PromptComponent, string>>(['close']);

describe('PromptComponent with config', () => {
  let component: PromptComponent;
  let fixture: ComponentFixture<PromptComponent>;
  let dialogRef: MatDialogRef<PromptComponent, string>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PromptComponent
      ],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: PROMPT_POPUP_CONFIG, useValue: promptPopupConfig }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromptComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.get(MatDialogRef);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
