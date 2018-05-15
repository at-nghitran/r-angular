import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})

export class EmployeeDetailComponent implements OnInit {

  @Input() employee: Employee;
  @Input('employees') employees: Employee;
  @Input() isSelected: boolean;
  @Output() onShow = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
    console.log('detail Init');
    
  }

  onClick() {
    this.onShow.emit(false);
  }
}
