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
  selectedEmployee: any;
  isSelected: boolean;

  constructor() {
    this.isSelected = false;
    this.employees = EMPLOYEE;
    this.selectedEmployee = {};
  }

  onSelect(employee) {
    this.selectedEmployee = employee;
    this.isSelected = true;
  }

  onShow(event) {
    this.isSelected = event;
  }

  onGetData(data) {
    this.selectedEmployee = data;
  }

  onSelectElm(event) {
    this.isSelected = event;
  }
}
