import { Component, Input, OnInit, Output } from '@angular/core';
import { users } from 'src/users-data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent implements OnInit {

  constructor() {}

  @Input() dataUser : []; 
  // Les Oreilles pour écouter le parent controlleur, avec un tableau initialisé à vide
  // qu'on enverra vers le HTML parent en proprieté binding [dataUser]

  ngOnInit() {

  console.log(users);
    
  }
}
