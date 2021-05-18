import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ListesElevesComponent } from 'app/eleves/listes-eleves/listes-eleves.component';
import { ListeProfComponent } from 'app/prof/liste-prof/liste-prof.component';
import { ListeSeanceComponent } from 'app/seance/liste-seance/liste-seance.component';
import { ListeMatiereComponent } from 'app/matiere/liste-matiere/liste-matiere.component';
import { ListesNiveauComponent } from 'app/niveau/listes-niveau/listes-niveau.component';
import { ListeOffreComponent } from 'app/Offre/liste-offre/liste-offre.component';
import { ListePaiementComponent } from 'app/paiement/liste-paiement/liste-paiement.component';
import { ListeEtablissementComponent } from 'app/etablissement/liste-etablissement/liste-etablissement.component';
import { ListesCategorieComponent } from 'app/categorie/listes-categorie/listes-categorie.component';
import { ListeAnneeComponent } from 'app/anneeScolaire/liste-annee/liste-annee.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    ListesElevesComponent,
    ListeProfComponent,
    ListeSeanceComponent,
    ListeMatiereComponent,
    ListesNiveauComponent,
    ListeOffreComponent,
    ListePaiementComponent,
    ListeEtablissementComponent,
    ListesCategorieComponent,
    ListeAnneeComponent,
  ]
})

export class AdminLayoutModule {}
