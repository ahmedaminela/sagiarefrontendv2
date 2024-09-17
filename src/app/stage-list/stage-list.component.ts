import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Import Router
import { StageService } from '../services/stage.service';
import { AuthService } from '../services/auth.service';
import { Stage } from '../modules/stage';
import { StageApplicantsDialogComponent } from '../stage-applicants-dialog/stage-applicants-dialog.component';
import { ApplicationRequest } from '../modules/ApplicationRequest';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {
  stages: Stage[] = [];
  paginatedStages: Stage[] = [];
  errorMessage: string | null = null;
  applicants: any[] = [];
  selectedStageId: number | null = null;

  currentPage = 1;
  pageSize = 3; // Number of stages per page
  totalPages = 0;

  constructor(
    private stageService: StageService, 
    private authService: AuthService,
    private dialog: MatDialog,
    private router: Router // Inject Router
  ) {}

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages(): void {
    this.stageService.getAllStages().subscribe(
      (stages) => {
        this.stages = stages;
        this.totalPages = Math.ceil(this.stages.length / this.pageSize);
        this.paginateStages();
      },
      (error) => this.errorMessage = 'Failed to load stages.'
    );
  }

  paginateStages(): void {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedStages = this.stages.slice(startIndex, endIndex);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.paginateStages();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.paginateStages();
    }
  }

  applyToStage(stageId: number): void {
    const username = this.authService.getUsername(); // Retrieve username from AuthService

    if (!username) {
      console.error('Username not found');
      return;
    }

    const applicationRequest: ApplicationRequest = {
      username: username,
      stageId: stageId,
    };

    this.stageService.applyToStage(applicationRequest).subscribe(
      (response) => {
        console.log('Application successful:', response);
        alert('Successfully applied for the stage!');
      },
      (error) => {
        console.error('Error applying for the stage:', error);
        alert('Failed to apply for the stage.');
      }
    );
  }

  viewApplicants(stageId: number): void {
    this.dialog.open(StageApplicantsDialogComponent, {
      width: '600px',
      data: { stageId }
    });
  }

  goToCreateStage(): void {
    this.router.navigate(['/createstg']); // Navigate to the create stage page
  }

  hasPermission(permission: string): boolean {
    const permissions = this.authService.getRoles();
    return permissions.includes(permission);
  }
}
