import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSelectorTwoComponent } from './filter-selector-two.component';

describe('FilterSelectorTwoComponent', () => {
  let component: FilterSelectorTwoComponent;
  let fixture: ComponentFixture<FilterSelectorTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterSelectorTwoComponent]
    });
    fixture = TestBed.createComponent(FilterSelectorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
