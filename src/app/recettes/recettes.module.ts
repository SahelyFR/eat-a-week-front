import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteComponent } from './components/recette/recette.component';
import { RecetteListComponent } from './components/recette-list/recette-list.component';
import { NewRecetteComponent } from './components/new-recette/new-recette.component';
import { RouterModule } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    RecetteComponent,
    RecetteListComponent,
    NewRecetteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    ReactiveFormsModule
  ],
  exports: [
    RecetteComponent,
    RecetteListComponent,
    NewRecetteComponent
  ]
})
export class RecettesModule { }
