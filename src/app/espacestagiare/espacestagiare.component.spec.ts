import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacestagiareComponent } from './espacestagiare.component';

describe('EspacestagiareComponent', () => {
  let component: EspacestagiareComponent;
  let fixture: ComponentFixture<EspacestagiareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EspacestagiareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspacestagiareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
