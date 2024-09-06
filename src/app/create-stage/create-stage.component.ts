import { Component } from '@angular/core';
import { StageService } from '../services/stage.service';
import { StageCreateRequest } from '../modules/StageCreateRequest';

@Component({
  selector: 'app-create-stage',
  templateUrl: './create-stage.component.html',
  styleUrls: ['./create-stage.component.css']
})
export class CreateStageComponent {
  stage: StageCreateRequest = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    encadrantId: 0
  };

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private stageService: StageService) {}

  onSubmit(): void {
    this.stageService.createStage(this.stage).subscribe({
      next: (response) => {
        this.successMessage = 'Stage created successfully!';
        this.errorMessage = null;
        this.resetForm();
      },
      error: (error) => {
        this.errorMessage = 'An error occurred while creating the stage.';
        this.successMessage = null;
        console.error(error);
      }
    });
  }

  resetForm(): void {
    this.stage = {
      title: '',
      description: '',
      startDate: '',
      endDate: '',
      encadrantId: 0
    };
  }
}
