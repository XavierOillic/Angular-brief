import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {

  @Output () searchToParent = new EventEmitter();
  // Ca c'est pour partir, EMITTER, vers le parent.

entryName(searchPerson: any) { // le searchPerson === le *event du HTML enfant.
  this.searchToParent.emit(searchPerson); // j'envoie le EVENT transformé en searchPerson vers le parent en passant par l'output
  //console.log(searchPerson.target.value);
}

  constructor() {}

  ngOnInit() {}
}
