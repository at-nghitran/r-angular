import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  @Input() employees;
  @Input() isSelected;
  @Output() onGetData = new EventEmitter<object>();
  @Output() onSelectElm = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(data) {
    this.onGetData.emit(data);
    this.onSelectElm.emit(true);
  }
}
