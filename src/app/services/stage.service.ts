import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../modules/stage';
import { StageCreateRequest } from '../modules/StageCreateRequest';
import { ApplicationRequest } from '../modules/ApplicationRequest';
import { ApplicationResponse } from '../modules/ApplicationResponse';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = 'http://localhost:8080/stages/all'; // API endpoint for fetching stages
  private createStageUrl = 'http://localhost:8080/stages/create'; // API endpoint for creating a new stage
  private applyApiUrl = 'http://localhost:8080/stages/apply'; // Replace with your API endpoint for applying to a stage
  private applicantsApiUrl = 'http://localhost:8080/stages'; // Base URL for applicants endpoint

  constructor(private http: HttpClient) {}

  // Fetch all stages
  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl);
  }

  // Create a new stage
  createStage(stageRequest: StageCreateRequest): Observable<Stage> {
    return this.http.post<Stage>(this.createStageUrl, stageRequest);
  }

  applyToStage(applicationRequest: ApplicationRequest): Observable<any> {
    return this.http.post(this.applyApiUrl, applicationRequest);
  }
  getApplicantsForStage(stageId: number): Observable<ApplicationResponse[]> {
    return this.http.get<ApplicationResponse[]>(`${this.applicantsApiUrl}/${stageId}/applications`);
  }
}
