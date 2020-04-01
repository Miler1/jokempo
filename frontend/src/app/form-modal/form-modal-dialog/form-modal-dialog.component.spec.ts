import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormModalDialogComponent } from './form-modal-dialog.component';

describe('FormModalDialogComponent', () => {
  let component: FormModalDialogComponent;
  let fixture: ComponentFixture<FormModalDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormModalDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormModalDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
