import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-selector-two',
  templateUrl: './filter-selector-two.component.html',
  styleUrls: ['./filter-selector-two.component.css']
})
export class FilterSelectorTwoComponent {

@Output() btnByLocation = new EventEmitter<string>();

filterByLocation(eventLocation: any) {
  //console.log(`From child, filter by location ==> ${eventLocation}`);
  this.btnByLocation.emit(eventLocation);
  }
}
