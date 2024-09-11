import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StageService } from '../services/stage.service';
import { ApplicationResponse } from '../modules/ApplicationResponse';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-stage-applicants-dialog',
  templateUrl: './stage-applicants-dialog.component.html',
  styleUrls: ['./stage-applicants-dialog.component.css']
})
export class StageApplicantsDialogComponent implements OnInit {
  applicants: ApplicationResponse[] = [];
  errorMessage: string | null = null;

  constructor(
    private stageService: StageService,
    public dialogRef: MatDialogRef<StageApplicantsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { stageId: number }
  ) {}

  ngOnInit(): void {
    this.loadApplicants(this.data.stageId);
  }

  loadApplicants(stageId: number): void {
    this.stageService.getApplicantsForStage(stageId).subscribe(
      (applicants) => this.applicants = applicants,
      (error) => this.errorMessage = 'Error loading applicants'
    );
  }

  acceptApplicant(applicationId: number): void {
    this.stageService.acceptApplication(applicationId).subscribe(
      (response) => this.loadApplicants(this.data.stageId), // Refresh applicants list
      (error: HttpErrorResponse) => this.errorMessage = 'Error accepting application'
    );
  }

  rejectApplicant(applicationId: number): void {
    this.stageService.rejectApplication(applicationId).subscribe(
      (response) => this.loadApplicants(this.data.stageId), // Refresh applicants list
      (error: HttpErrorResponse) => this.errorMessage = 'Error rejecting application'
    );
  }

  cancelApplicant(applicationId: number): void {
    this.stageService.cancelApplication(applicationId).subscribe(
      (response) => this.loadApplicants(this.data.stageId), // Refresh applicants list
      (error: HttpErrorResponse) => this.errorMessage = 'Error canceling application'
    );
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
