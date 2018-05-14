import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;
  @Input() isSelected: boolean;
  @Input('employeeSamePosition') employeeSamePosition;
  @Output() onShow = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.onShow.emit(false);
  }
}
