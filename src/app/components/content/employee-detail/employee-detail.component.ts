import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Employee } from '../../../employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit, OnDestroy {

  @Input() employee: Employee;
  @Input('employees') employees: Employee;
  @Input() isSelected: boolean;
  @Output() onShow = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onClick() {
    this.onShow.emit(false);
  }
}
