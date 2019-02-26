import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Employee } from '../../../employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})

export class EmployeeDetailComponent implements OnInit, OnDestroy {

  @Input() employee: Employee;
  @Input('employees') employees: Employee;
  @Input() isSelected: boolean;
  @Output() showComponent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  onClick() {
    this.showComponent.emit(false);
  }

  onSelect(data) {
    this.employee = data;
  }
}
