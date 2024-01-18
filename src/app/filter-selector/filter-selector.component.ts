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

@Output() filtrationBtnFromChild = new EventEmitter();

applyThisBtnFilter(eventFromFilter: any) {
  //console.log(`valeur du click chez l'enfant ==> ${eventFromFilter}`)
  this.filtrationBtnFromChild.emit(eventFromFilter);
}
  constructor() {}

  ngOnInit() {}
  
}
