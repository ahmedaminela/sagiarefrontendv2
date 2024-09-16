import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../modules/stage';
import { StageCreateRequest } from '../modules/StageCreateRequest';
import { ApplicationRequest } from '../modules/ApplicationRequest';
import { ApplicationResponse } from '../modules/ApplicationResponse';
import { StagiaireResponse } from '../modules/StagiareResponse';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = 'http://localhost:8080/stages/all'; // API endpoint for fetching stages
  private createStageUrl = 'http://localhost:8080/stages/create'; // API endpoint for creating a new stage
  private applyApiUrl = 'http://localhost:8080/stages/apply'; // API endpoint for applying to a stage
  private applicantsApiUrl = 'http://localhost:8080/stages'; // Base URL for applicants endpoint
  private apiUrl2 = 'http://localhost:8080/auth/Allstagiaires';
  private apiUrl3 = 'http://localhost:8080/stages/my/applications';  // Backend endpoint

  constructor(private http: HttpClient) {}

  // Fetch all stages
  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl);
  }

  // Create a new stage
  createStage(stageRequest: StageCreateRequest): Observable<Stage> {
    return this.http.post<Stage>(this.createStageUrl, stageRequest);
  }

  // Apply to a stage
  applyToStage(applicationRequest: ApplicationRequest): Observable<any> {
    return this.http.post(this.applyApiUrl, applicationRequest);
  }

  // Get applicants for a stage
  getApplicantsForStage(stageId: number): Observable<ApplicationResponse[]> {
    return this.http.get<ApplicationResponse[]>(`${this.applicantsApiUrl}/${stageId}/applications`);
  }

  // Accept an application
  acceptApplication(applicationId: number): Observable<ApplicationResponse> {
    return this.http.post<ApplicationResponse>(`${this.applicantsApiUrl}/${applicationId}/accept`, {});
  }

  // Reject an application
  rejectApplication(applicationId: number): Observable<ApplicationResponse> {
    return this.http.post<ApplicationResponse>(`${this.applicantsApiUrl}/${applicationId}/reject`, {});
  }

  // Cancel an application
  cancelApplication(applicationId: number): Observable<ApplicationResponse> {
    return this.http.post<ApplicationResponse>(`${this.applicantsApiUrl}/${applicationId}/cancel`, {});
  }
  getStagiaires(): Observable<StagiaireResponse[]> {
    return this.http.get<StagiaireResponse[]>(this.apiUrl2);
  }
  getStagiairesForEncadrant(): Observable<StagiaireResponse[]> {
    return this.http.get<StagiaireResponse[]>(`${this.applicantsApiUrl}/encadrant`);
  }
  getMyApplications(): Observable<ApplicationResponse[]> {
    return this.http.get<ApplicationResponse[]>(this.apiUrl3);
  }
 // Example service method to send feedback
 addEncadrantFeedback(applicationId: number, note: number, comments: string): Observable<ApplicationResponse> {
  return this.http.post<ApplicationResponse>(`http://localhost:8080/stages/applications/${applicationId}/feedback`, {
    notes: note,
    encadrantComments: comments
  });
}

}
