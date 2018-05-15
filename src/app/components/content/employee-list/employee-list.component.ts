import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})

export class EmployeeListComponent implements OnInit {

  @Input() employees;
  @Input() isSelected;
  @Output() Sendata = new EventEmitter<object>();
  @Output() SelectElement = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectElm (data) {
    this.SelectElement.emit(data);
  }

  onGetData (employee) {
    this.Sendata.emit(employee);
  }
}
