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
  
  constructor(private dataService: DataService) {}

  transmitSearchToTs (receivedSearch: any) {
    console.log(`je Suis dans  le PARENT ==>  ${receivedSearch.target.value}`);

    let searchUser: string = receivedSearch.target.value; // je target la valeur transmise dès la saisie par le champ de recherche

    this.usersToDisplayTamp = this.usersToDisplay.filter((UserModel) =>
    UserModel.name.first.toLowerCase().includes(searchUser)
    );
    // J'utilise USERMODEL (model) comme prédicat ?! dans le filtre.
  }

  ngOnInit() {
    //console.log(this.dataService.getUsersData());

    this.usersToDisplayTamp = this.dataService.getUsersData();
    this.usersToDisplay = this.dataService.getUsersData();
    
    //ce contenent vide, j'y stocke le tableau de données et sa méthode de récupération.
    // On ne touche pas au parent CONTROLLEUR. NI BOUCHE NI OREILLE.
    // Mais je déclare des proprieté : mon tableau initialisé à vide, que je peux appeller dans l'enfant.
  }
}

