import { Component } from '@angular/core';
import { StageService } from '../services/stage.service';
import { StagiaireResponse } from '../modules/StagiareResponse';

@Component({
  selector: 'app-encadrantstgrs',
  templateUrl: './encadrantstgrs.component.html',
  styleUrl: './encadrantstgrs.component.css'
})
export class EncadrantstgrsComponent {
  stagiaires: StagiaireResponse[] = [];

  constructor(private stagiaireService: StageService) {}

  ngOnInit(): void {
    // Fetch stagiaires for the encadrant on component initialization
    this.stagiaireService.getStagiairesForEncadrant().subscribe(
      (data: StagiaireResponse[]) => {
        this.stagiaires = data;
      },
      (error) => {
        console.error('Error fetching stagiaires', error);
      }
    );
  }

}
