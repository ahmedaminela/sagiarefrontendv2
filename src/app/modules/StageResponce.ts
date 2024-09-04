// src/app/models/stage-response.model.ts
 // Enum for StageState if needed

import { ApplicationResponse } from "./ApplicationResponse";
import { EncadrantResponse } from "./EncadrantResponse";
import { RhResponse } from "./RhResponse";
import { StageState } from "./StageState";
import { StagiaireResponse } from "./StagiareResponse";

export interface StageResponse {
  id: number;
  title: string;
  startDate: Date;
  endDate: Date;
  description: string;
  state: StageState;
  rh: RhResponse;
  encadrant: EncadrantResponse;
  applications: ApplicationResponse[];
  stagiaires: StagiaireResponse[];
}
