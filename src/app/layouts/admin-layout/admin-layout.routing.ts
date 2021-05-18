import { Routes } from '@angular/router';
import { AjoutAnneeComponent } from 'app/anneeScolaire/ajout-annee/ajout-annee.component';
import { ListeAnneeComponent } from 'app/anneeScolaire/liste-annee/liste-annee.component';
import { AjoutCategorieComponent } from 'app/categorie/ajout-categorie/ajout-categorie.component';
import { ListesCategorieComponent } from 'app/categorie/listes-categorie/listes-categorie.component';
import { AjoutEleveComponent } from 'app/eleves/ajout-eleve/ajout-eleve.component';
import { ListesElevesComponent } from 'app/eleves/listes-eleves/listes-eleves.component';
import { AjoutEtablissementComponent } from 'app/etablissement/ajout-etablissement/ajout-etablissement.component';
import { ListeEtablissementComponent } from 'app/etablissement/liste-etablissement/liste-etablissement.component';
import { AjoutMatiereComponent } from 'app/matiere/ajout-matiere/ajout-matiere.component';
import { ListeMatiereComponent } from 'app/matiere/liste-matiere/liste-matiere.component';
import { AjoutNiveauComponent } from 'app/niveau/ajout-niveau/ajout-niveau.component';
import { ListesNiveauComponent } from 'app/niveau/listes-niveau/listes-niveau.component';
import { AjoutOffreComponent } from 'app/Offre/ajout-offre/ajout-offre.component';
import { ListeOffreComponent } from 'app/Offre/liste-offre/liste-offre.component';
import { AjoutPaiementComponent } from 'app/paiement/ajout-paiement/ajout-paiement.component';
import { ListePaiementComponent } from 'app/paiement/liste-paiement/liste-paiement.component';
import { AjoutProfComponent } from 'app/prof/ajout-prof/ajout-prof.component';
import { ListeProfComponent } from 'app/prof/liste-prof/liste-prof.component';
import { AjoutSeanceComponent } from 'app/seance/ajout-seance/ajout-seance.component';
import { ListeSeanceComponent } from 'app/seance/liste-seance/liste-seance.component';

import { DashboardComponent } from '../../dashboard/dashboard.component';

export const AdminLayoutRoutes: Routes = [
   
    { path: 'Acceuil',   component: DashboardComponent },
    { path: 'liste-eleve',   component:ListesElevesComponent },
    { path: 'ajout-eleve',   component:AjoutEleveComponent },

    { path: 'liste-prof',   component:ListeProfComponent},
    { path: 'ajout-prof',   component:AjoutProfComponent},
    
    { path: 'liste-seance',   component:ListeSeanceComponent},
    { path: 'ajout-seance',   component:AjoutSeanceComponent},
    
    { path: 'liste-matiére',   component:ListeMatiereComponent},
    { path: 'ajout-matiére',   component:AjoutMatiereComponent},
    
    { path: 'liste-Niveau',   component:ListesNiveauComponent},
    { path: 'ajout-Niveau',   component:AjoutNiveauComponent},
    
    { path: 'liste-offre',   component:ListeOffreComponent},
    { path: 'ajout-offre',   component:AjoutOffreComponent},
        
    { path: 'liste-paiement',   component:ListePaiementComponent},
    { path: 'ajout-paiement',   component:AjoutPaiementComponent},
    
    { path: 'liste-etablissement',   component:ListeEtablissementComponent},
    { path: 'ajout-etablissement',   component:AjoutEtablissementComponent},

    { path: 'liste-categorie',   component:ListesCategorieComponent},
    { path: 'ajout-categorie',   component:AjoutCategorieComponent},
    
    { path: 'liste-annéescolaire',   component:ListeAnneeComponent},
    { path: 'ajout-annéescolaire',   component:AjoutAnneeComponent},
];
