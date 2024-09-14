import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncadrantstgrsComponent } from './encadrantstgrs.component';

describe('EncadrantstgrsComponent', () => {
  let component: EncadrantstgrsComponent;
  let fixture: ComponentFixture<EncadrantstgrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncadrantstgrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncadrantstgrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
