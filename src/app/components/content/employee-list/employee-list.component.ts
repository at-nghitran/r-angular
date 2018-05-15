import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {

  @Input() employees;
  @Input() isSelected;
  @Output('onGetData') onSendata = new EventEmitter<object>();
  @Output('onSelectElm') onSelectElement = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelectElm (data) {
    this.onSelectElement.emit(data);
  }

  onGetData (employee) {
    this.onSendata.emit(employee);
  }
}
