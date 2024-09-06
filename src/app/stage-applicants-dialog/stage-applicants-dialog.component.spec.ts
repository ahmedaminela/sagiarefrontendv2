import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageApplicantsDialogComponent } from './stage-applicants-dialog.component';

describe('StageApplicantsDialogComponent', () => {
  let component: StageApplicantsDialogComponent;
  let fixture: ComponentFixture<StageApplicantsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StageApplicantsDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StageApplicantsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
