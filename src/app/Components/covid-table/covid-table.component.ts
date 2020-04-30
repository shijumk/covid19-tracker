import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-covid-table',
  templateUrl: './covid-table.component.html',
  styleUrls: ['./covid-table.component.css']
})
export class CovidTableComponent {

  page = 1;
  pageSize = 11;

  @Input() public dataObj;
  @Output() selectedVal = new EventEmitter();

  constructor() { }

  onCountrySelected(data) {
    this.selectedVal.emit(data);
  }

}
