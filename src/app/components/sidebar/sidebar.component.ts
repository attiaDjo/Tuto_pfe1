import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  
    { path: '/Acceuil', title: 'Acceuil',  icon: 'dashboard', class: '' },
    { path: '/liste-eleve', title: 'Listes des éleves',  icon: '', class: '' },
    { path: '/liste-prof', title: 'Listes des Professeurs',  icon: '', class: '' },
    { path: '/liste-seance', title: 'Listes des séances',  icon: '', class: '' },
    { path: '/liste-matiére', title: 'Listes des Matiéres',  icon: '', class: '' },
    { path: '/liste-Niveau', title: 'Listes des Niveaux',  icon: '', class: '' },
    { path: '/liste-offre', title: 'Listes des offres',  icon: '', class: '' },
    { path: '/liste-paiement', title: 'Listes des paiements',  icon: '', class: '' },
    { path: '/liste-etablissement', title: 'Listes des établissement',  icon: '', class: '' },
    { path: '/liste-categorie', title: 'Listes des catégories',  icon: '', class: '' },
    { path: '/liste-annéescolaire', title: 'Listes des années scolaires',  icon: '', class: '' },
   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
