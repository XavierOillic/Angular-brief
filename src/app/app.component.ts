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
  
  selectByBtn: string = 'first'; // J'initialisee la propriété qui stocke la valeur du bouton cliqué 
  selectByText: string = ''; //J'initialise la propriété qui stocke la valeur de la saisie texte

  constructor(private dataService: DataService) {}

filteredByBtn(eventFromFilter:string) {
    console.log(`valeur du click chez le Parent ==> ${eventFromFilter}`)
    console.log(this.selectByBtn);

    this.selectByBtn = eventFromFilter;

this.generalFilter()
}

filteredByText (receivedSearch: any) {
      console.log(`...dans  le PARENT ==>  ${receivedSearch.target.value}`);
      console.log(`I apply this filter on ${this.usersToDisplay.length} Users`);

    this.selectByText = receivedSearch.target.value; // je target la valeur transmise dès la saisie par le champ de recherche

  this.generalFilter()
  }

  generalFilter(){
    this.usersToDisplayTamp = this.usersToDisplay.filter((UserModel) =>
    UserModel.name[this.selectByBtn].toLowerCase().includes(this.selectByText)); 
    // J'utilise USERMODEL (model) comme prédicat ?! dans le filtre. 
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

