// src/app/services/stage.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stage } from '../modules/stage';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  private apiUrl = 'http://localhost:8080/stages/all'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getAllStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.apiUrl);
  }
}
