import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StageService } from '../services/stage.service';
import { AuthService } from '../services/auth.service';
import { Stage } from '../modules/stage';
import { ApplicationRequest } from '../modules/ApplicationRequest';
import { StageApplicantsDialogComponent } from '../stage-applicants-dialog/stage-applicants-dialog.component';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {
  stages: Stage[] = [];
  errorMessage: string | null = null;
  applicants: any[] = [];
  selectedStageId: number | null = null;

  constructor(
    private stageService: StageService, 
    private authService: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages(): void {
    this.stageService.getAllStages().subscribe(
      (stages) => this.stages = stages,
      (error) => this.errorMessage = 'Failed to load stages.'
    );
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
      width: '500px',
      data: { stageId }
    });
  }
}
