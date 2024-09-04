// src/app/components/stage-list/stage-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Stage } from '../modules/stage';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-stage-list',
  templateUrl: './stage-list.component.html',
  styleUrls: ['./stage-list.component.css']
})
export class StageListComponent implements OnInit {

  stages: Stage[] = [];
  errorMessage: string | null = null;

  constructor(private stageService: StageService) { }

  ngOnInit(): void {
    this.loadStages();
  }

  loadStages(): void {
    this.stageService.getAllStages().subscribe({
      next: (data) => this.stages = data,
      error: (err) => this.errorMessage = 'Failed to load stages.'
    });
  }
}
