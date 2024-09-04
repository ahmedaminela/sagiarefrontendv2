// src/app/models/application-response.model.ts

import { FileResponse } from "./FileResponse";
import {ApplicationStatus} from "./ApplicationStatus"



export interface ApplicationResponse {
  id: number;
  stagiaireId: number;
  stagiaireFirstname: string;
  stagiaireLastname: string;
  stageId: number;
  submissionDate: Date;
  status: ApplicationStatus;
  notes: string;
  files: FileResponse[];
}
