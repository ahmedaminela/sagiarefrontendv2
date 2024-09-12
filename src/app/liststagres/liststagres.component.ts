import { Component, OnInit } from '@angular/core';
import { StagiaireResponse } from '../modules/StagiareResponse';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-stagiaires',
  templateUrl: './liststagres.component.html',
  styleUrls: ['./liststagres.component.css']
})
export class ListstagresComponent implements OnInit {
  stagiaires: StagiaireResponse[] = [];

  constructor(private stagiaireService: StageService) { }

  ngOnInit(): void {
    this.stagiaireService.getStagiaires().subscribe(data => {
      this.stagiaires = data;
    });
  }
}
