import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Recette } from '../../../core/models/recette.model';
import { RecettesService } from '../../../core/services/recettes.service';

@Component({
  selector: 'app-recette-list',
  templateUrl: './recette-list.component.html',
  styleUrls: ['./recette-list.component.scss']
})
export class RecetteListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'spring', 'summer', 'autumn', 'winter'];
  recettes$!: Observable<Recette[]>;
  nbRecette!: number;
  constructor(private recetteService: RecettesService) { }

  ngOnInit(): void {
    this.recettes$ = this.recetteService.getAllRecettes();
    this.recettes$.forEach(value => {
      this.nbRecette = value.length;
    });
  }
}
