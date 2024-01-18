import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector',
  templateUrl: './filter-selector.component.html',
  styleUrls: ['./filter-selector.component.css'],
})

export class FilterSelectorComponent implements OnInit {
[x: string]: any;
//dataUser: any;
//filterBtn: any;

@Output() filtrationBtnFromChild = new EventEmitter<string>();

@Output() filtrationBtnCity = new EventEmitter<string>();

applyThisBtnFilter(eventFromFilter: any) {
  //console.log(`valeur du click chez l'enfant ==> ${eventFromFilter}`)
  this.filtrationBtnFromChild.emit(eventFromFilter);
}
applyBtnCity(eventFilterCity: any) {
  //console.log(`valeur du click chez l'enfant ==> ${eventFilterCity}`)
  this.filtrationBtnCity.emit(eventFilterCity);
}
  constructor() {}

  ngOnInit() {}
  
}
