import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { StagiaireResponse } from '../modules/StagiareResponse';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './liststagres.component.html',
  styleUrls: ['./liststagres.component.css']
})
export class ListstagresComponent implements OnInit {
  stagiaires: StagiaireResponse[] = [];
  paginatedStagiaires: StagiaireResponse[] = [];
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private stagiaireService: StageService) { }

  ngOnInit(): void {
    this.loadStagiaires();
  }

  loadStagiaires(): void {
    this.stagiaireService.getStagiaires().subscribe(data => {
      this.stagiaires = data;
      this.totalPages = Math.ceil(this.stagiaires.length / this.pageSize);
      this.updatePagination();
    });
  }

  updatePagination(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.paginatedStagiaires = this.stagiaires.slice(start, end);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePagination();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePagination();
    }
  }
}
