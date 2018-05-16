import { Component } from '@angular/core';
import { Employee } from '../../employee';
import { EMPLOYEE } from '../../employees';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent {
  employees: any;
  selectedEmployeeId: string;
  isSelected: boolean;

  constructor() {
    this.isSelected = false;
    this.employees = EMPLOYEE;
    this.selectedEmployeeId  = '';
  }

  // onSelect(employee) {
  //   this.selectedEmployee = employee;
  //   this.isSelected = true;
  // }

  onShow(event) {
    this.isSelected = event;
  }

  onGetData(id) {
    this.selectedEmployeeId = id;
  }

  onSelectElm(event) {
    this.isSelected = event;
  }
}
