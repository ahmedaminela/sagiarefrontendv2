// src/app/models/application-request.ts
export interface ApplicationRequest {
    username: string;
    stageId: number;
    notes?: string; // Optional field if your backend requires it
  }
  