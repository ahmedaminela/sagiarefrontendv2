// src/app/models/stage.model.ts
export interface Stage {
    id: number; // Or other type if not a number
    title: string;
    description: string;
    startDate: string; // Use string if using date as ISO string; adjust if using Date type
    endDate: string;   // Same as above
    state: string;     // Adjust type if needed (e.g., enum)
    rh: User;          // Assuming User is another model you have
    encadrant: User;   // Same as above
  }
  
  // User model should be defined separately if needed
  export interface User {
    id: number;
    username: string;
    // Add other user properties if necessary
  }
  