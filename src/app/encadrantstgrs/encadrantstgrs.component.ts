import { Component, OnInit } from '@angular/core';
import { StagiaireResponse } from '../modules/StagiareResponse';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-encadrantstgrs',
  templateUrl: './encadrantstgrs.component.html',
  styleUrls: ['./encadrantstgrs.component.css']
})
export class EncadrantstgrsComponent implements OnInit {
  stagiaires: StagiaireResponse[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private stagiaireService: StageService) {}

  ngOnInit(): void {
    // Fetch stagiaires for the encadrant on component initialization
    this.stagiaireService.getStagiairesForEncadrant().subscribe(
      (data: StagiaireResponse[]) => {
        this.stagiaires = data;
        this.totalPages = Math.ceil(this.stagiaires.length / this.pageSize);
        this.updateStagiairesForPage();
      },
      (error) => {
        console.error('Error fetching stagiaires', error);
      }
    );
  }

  updateStagiairesForPage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.stagiaires = this.stagiaires.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateStagiairesForPage();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateStagiairesForPage();
    }
  }
}
