import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { StageCreateRequest } from '../modules/StageCreateRequest';
import { Encadrant } from '../modules/Encadrant';

@Component({
  selector: 'app-create-stage',
  templateUrl: './create-stage.component.html',
  styleUrls: ['./create-stage.component.css']
})
export class CreateStageComponent implements OnInit {
  stage: StageCreateRequest = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    encadrantId: 0
  };

  encadrants: Encadrant[] = [];
  selectedEncadrantId: number = 0;

  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private stageService: StageService) {}

  ngOnInit(): void {
    this.loadEncadrants();
  }

  loadEncadrants(): void {
    this.stageService.getEncadrants().subscribe({
      next: (response) => {
        this.encadrants = response;
      },
      error: (error) => {
        console.error('Failed to load encadrants:', error);
        this.errorMessage = 'Failed to load encadrants.';
      }
    });
  }

  onSubmit(): void {
    this.stage.encadrantId = this.selectedEncadrantId;
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
    this.selectedEncadrantId = 0;
  }
}
