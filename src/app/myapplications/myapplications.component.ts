import { Component, OnInit } from '@angular/core';
import { ApplicationResponse } from '../modules/ApplicationResponse';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-myapplications',
  templateUrl: './myapplications.component.html',
  styleUrl: './myapplications.component.css'
})
export class MyapplicationsComponent implements OnInit {
  applications: ApplicationResponse[] = [];

  constructor(private applicationService: StageService) {}

  ngOnInit(): void {
    this.loadMyApplications();
  }

  loadMyApplications(): void {
    this.applicationService.getMyApplications().subscribe(
      (data: ApplicationResponse[]) => {
        this.applications = data;
      },
      (error) => {
        console.error('Error loading applications', error.message); // Log the error message
      }
    );
  }
  getStatusClass(status: string): string {
    switch (status) {
      case 'PENDING':
        return 'status-pending';
      case 'ACCEPTED':
        return 'status-accepted';
      case 'REJECTED':
        return 'status-rejected';
      case 'CANCELED':
        return 'status-canceled';
      default:
        return '';
    }
  }
}