import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstagresComponent } from './liststagres.component';

describe('ListstagresComponent', () => {
  let component: ListstagresComponent;
  let fixture: ComponentFixture<ListstagresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListstagresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListstagresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
