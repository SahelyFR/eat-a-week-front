import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Recette } from '../../../core/models/recette.model';
import { RecettesService } from '../../../core/services/recettes.service';

@Component({
  selector: 'app-new-recette',
  templateUrl: './new-recette.component.html',
  styleUrls: ['./new-recette.component.scss']
})
export class NewRecetteComponent implements OnInit {
  
  recetteForm!: FormGroup;
  recettePreview$!: Observable<Recette>;
  urlRegex!: RegExp;

  constructor(private fb: FormBuilder,
              private rs: RecettesService,
              private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.recetteForm = this.fb.group({
      name: [null, [Validators.required]],
      link: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
      spring: [false],
      summer: [false],
      autumn: [false],
      winter: [false]
    });
    
    this.recettePreview$ = this.recetteForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        id: 0
      }))
    );
  }

  onSubmitForm(){
    this.rs.createRecette(this.recetteForm.value).pipe(
      tap(() => this.router.navigateByUrl('/recettes'))
    ).subscribe();
    this.router.navigateByUrl('/recettes');
  }

}
