import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { AjoutEleveComponent } from './eleves/ajout-eleve/ajout-eleve.component';
import { ListesElevesComponent } from './eleves/listes-eleves/listes-eleves.component';
import { AjoutProfComponent } from './prof/ajout-prof/ajout-prof.component';
import { ListeProfComponent } from './prof/liste-prof/liste-prof.component';
import { AjoutSeanceComponent } from './seance/ajout-seance/ajout-seance.component';
import { AjoutMatiereComponent } from './matiere/ajout-matiere/ajout-matiere.component';
import { ListeMatiereComponent } from './matiere/liste-matiere/liste-matiere.component';
import { AjoutNiveauComponent } from './niveau/ajout-niveau/ajout-niveau.component';
import { ListesNiveauComponent } from './niveau/listes-niveau/listes-niveau.component';
import { AjoutCategorieComponent } from './categorie/ajout-categorie/ajout-categorie.component';
import { ListesCategorieComponent } from './categorie/listes-categorie/listes-categorie.component';
import { AjoutAnneeComponent } from './anneeScolaire/ajout-annee/ajout-annee.component';
import { AjoutPaiementComponent } from './paiement/ajout-paiement/ajout-paiement.component';
import { AjoutOffreComponent } from './Offre/ajout-offre/ajout-offre.component';
import { AjoutEtablissementComponent } from './etablissement/ajout-etablissement/ajout-etablissement.component';
import { ListeEtablissementComponent } from './etablissement/liste-etablissement/liste-etablissement.component';
import { ListeAnneeComponent } from './anneeScolaire/liste-annee/liste-annee.component';
import { ListeOffreComponent } from './Offre/liste-offre/liste-offre.component';
import { ListePaiementComponent } from './paiement/liste-paiement/liste-paiement.component';
import { ListeSeanceComponent } from './seance/liste-seance/liste-seance.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    AjoutEleveComponent,
    ListesElevesComponent,
    AjoutProfComponent,
    ListeProfComponent,
    AjoutSeanceComponent,
    AjoutMatiereComponent,
    ListeMatiereComponent,
   
    AjoutNiveauComponent,
    ListesNiveauComponent,
    AjoutCategorieComponent,
    ListesCategorieComponent,
    AjoutAnneeComponent,
    AjoutPaiementComponent,
    AjoutOffreComponent,
    AjoutEtablissementComponent,
    ListeEtablissementComponent,
    ListeAnneeComponent,
    ListeOffreComponent,
    ListePaiementComponent,
    ListeSeanceComponent,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
