import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }

  @Input() employees
  @Input() isSelected;
  @Output() onGetData = new EventEmitter<object>();
  @Output() onSelectElm = new EventEmitter<boolean>();

  ngOnInit() {
    console.log('table', this.employees);
  }

  onSelect(data) {
    this.onGetData.emit(data);
    this.onSelectElm.emit(true);
  }

}
