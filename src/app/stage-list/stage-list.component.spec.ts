import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { StageListComponent } from './stage-list.component';
import { AuthService } from '../services/auth.service'; // Adjust the path as necessary

// Create a mock AuthService
class MockAuthService {
  getPermissions() {
    return of(['CREATE_STAGE', 'APPLY_FOR_STAGE']); // Adjust based on what permissions you want to test
  }
}

describe('StageListComponent', () => {
  let component: StageListComponent;
  let fixture: ComponentFixture<StageListComponent>;
  let mockAuthService: MockAuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StageListComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageListComponent);
    component = fixture.componentInstance;
    mockAuthService = TestBed.inject(AuthService) as unknown as MockAuthService; // Use type assertion
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show "Create Stage" button if the user has CREATE_STAGE permission', () => {
    const button = fixture.debugElement.query(By.css('button.btn-success'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('Create Stage');
  });

  it('should show "Apply" button if the user has APPLY_FOR_STAGE permission', () => {
    const button = fixture.debugElement.query(By.css('button.btn-primary'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('Apply');
  });

  it('should show "View Applicants" button if the user has VIEW_APPLICANTS permission', () => {
    const button = fixture.debugElement.query(By.css('button.btn-secondary'));
    expect(button).toBeTruthy();
    expect(button.nativeElement.textContent).toContain('View Applicants');
  });

  it('should hide "Create Stage" button if the user does not have CREATE_STAGE permission', () => {
    (mockAuthService as unknown as MockAuthService).getPermissions = () => of([]);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button.btn-success'));
    expect(button).toBeFalsy();
  });

  it('should hide "Apply" button if the user does not have APPLY_FOR_STAGE permission', () => {
    (mockAuthService as unknown as MockAuthService).getPermissions = () => of([]);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button.btn-primary'));
    expect(button).toBeFalsy();
  });

  it('should hide "View Applicants" button if the user does not have VIEW_APPLICANTS permission', () => {
    (mockAuthService as unknown as MockAuthService).getPermissions = () => of([]);
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button.btn-secondary'));
    expect(button).toBeFalsy();
  });
});
