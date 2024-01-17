import { Component, EventEmitter, OnInit, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  usersToDisplay = []; // J'initialise le tableau vide qui va contenir le tableau.

  usersToDisplayTamp = [];
  
  constructor(private dataService: DataService) {}

  transmitSearchToTs (receivedSearch: any) {
    console.log(receivedSearch.target.value);

    let searchUser: String = receivedSearch;

  }

  ngOnInit() {
    console.log(this.dataService.getUsersData());

    this.usersToDisplay = this.dataService.getUsersData();

    this.usersToDisplayTamp = this.dataService.getUsersData();
    //ce contenent vide, j'y stocke le tableau de données et sa méthode de récupération.
    // On ne touche pas au parent CONTROLLEUR. NI BOUCHE NI OREILLE.
    // Mais je déclare des proprieté : mon tableau initialisé à vide, que je peux appeller dans l'enfant.
  }
}

