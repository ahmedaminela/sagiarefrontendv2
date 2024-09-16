export interface StagiaireResponse {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  rhName: string;
  stageTitle: string;
  encadrantName: string;
  startDate: Date;   // Add startDate
  endDate: Date; 
  applicationId: number; // Add this property
  // Add endDate
}
