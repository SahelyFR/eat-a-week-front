import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recette } from '../../../core/models/recette.model';
import { RecettesService } from '../../../core/services/recettes.service';

@Component({
  selector: 'app-recette',
  templateUrl: './recette.component.html',
  styleUrls: ['./recette.component.scss']
})
export class RecetteComponent implements OnInit {
  recette$!: Observable<Recette>
  constructor(private recetteService: RecettesService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    const recetteId = +this.route.snapshot.params['id'];
    this.recette$ = this.recetteService.getRecetteById(recetteId);
  }

  

}
