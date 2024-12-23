// src/app/models/application-response.model.ts

import { FileResponse } from "./FileResponse";
import {ApplicationStatus} from "./ApplicationStatus"



export interface ApplicationResponse {
  id: number;
  username: string;  // Example: 'username' might be named 'user' in the API response
  stagiaireId: number;
  stagiaireFirstname: string;
  stagiaireLastname: string;
  stageId: number;
  stageName: String;
  submissionDate: Date;
  status: ApplicationStatus;
  notes: number;
  encadrantComments: String ;  // Encadrant's comments

  files: FileResponse[];
}
