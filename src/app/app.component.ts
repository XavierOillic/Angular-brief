import { Component, EventEmitter, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';
import { UserModel } from './model/userModel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  usersToDisplay: UserModel[] = []; // J'initialise le tableau vide qui va contenir le tableau.
  usersToDisplayTamp: UserModel[] = []; // J'initialise le tableau Tampon vide qui va contenir le tableau temporaire.
  
  selectByCity: string = 'city';
  selectByBtn: string = 'first'; // J'initialisee la propriété qui stocke la valeur du bouton cliqué 
  selectByText: string = ''; //J'initialise la propriété qui stocke la valeur de la saisie texte

  constructor(private dataService: DataService) {}

//RECUPERE et STOCKE LA VALEUR du BOUTON CITY.
  filterByLocation(receivedCity){
    console.log(`...dans le PARENT ==>  ${receivedCity}`);

    this.selectByCity = receivedCity;

    this.usersToDisplayTamp = this.usersToDisplay.filter((iterateurX) =>
    iterateurX.location[this.selectByCity].toLowerCase().includes(this.selectByText)); 
  }

// RECUPERE et STOCKE LA VALEUR des BOUTON.
filteredByBtn(eventFromFilter:string) {
    console.log(`valeur du click chez le Parent ==> ${eventFromFilter}`)
    console.log(this.selectByBtn);

    this.selectByBtn = eventFromFilter;
    this.generalFilter()
  }

// RECUPERE et STOCKE LA VALEUR du TEXTE.
filteredByText (receivedSearch: any) {
      console.log(`...dans  le PARENT ==>  ${receivedSearch.target.value}`);
      console.log(`I apply this filter on ${this.usersToDisplay.length} Users`);

    this.selectByText = receivedSearch.target.value; // je target la valeur transmise dès la saisie par le champ de recherche
    this.generalFilter()
  }

// Fait le travail de FILTRE GRACE AUX VALEURS RECUPEREES.
  generalFilter(){
    this.usersToDisplayTamp = this.usersToDisplay.filter((iterateurX) =>
    iterateurX.name[this.selectByBtn].toLowerCase().includes(this.selectByText)); 

    // ==> CE TAB TEMP. est égal au TAB FIXE filtré selon le USERMODEL (predicat) :
    // ==> Dans ce TAB, je choisi un mode de recherche, rendu DYNAMIQUE sur l'OBJET, uniquement sur un objet, 
    // pour prendre en compte l'un des trois btn, et qui inclurait ma SAISIE DE TEXTE.
  }

  ngOnInit() {
    //console.log(this.dataService.getUsersData());

    this.usersToDisplayTamp = [...this.dataService.getUsersData()];
    this.usersToDisplay = [...this.dataService.getUsersData()]; // Copie par VALEUR.

    //this.usersToDisplayTamp = this.dataService.getUsersData(); // Copie par REFERENCE.
    //this.usersToDisplay = this.dataService.getUsersData();
    
    //ce contenent vide, j'y stocke le tableau de données et sa méthode de récupération.
    // On ne touche pas au parent CONTROLLEUR. NI BOUCHE NI OREILLE.
    // Mais je déclare des proprieté : mon tableau initialisé à vide, que je peux appeller dans l'enfant.
  }
}

