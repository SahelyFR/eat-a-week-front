import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/components/landing-page.component";
import { LoginComponent } from "./core/components/login/login.component";
import { NewRecetteComponent } from "./recettes/components/new-recette/new-recette.component";
import { RecetteListComponent } from "./recettes/components/recette-list/recette-list.component";
import { RecetteComponent } from "./recettes/components/recette/recette.component";

const routes: Routes = [
    { path: 'recettes', component: RecetteListComponent },
    { path: '', component: LandingPageComponent },
    { path: 'recette/:id', component: RecetteComponent },
    { path: 'recette', component: NewRecetteComponent },
    { path: 'login', component: LoginComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
       RouterModule 
    ]
})
export class AppRoutingModule {}