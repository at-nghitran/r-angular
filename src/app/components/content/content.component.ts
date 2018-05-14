import { Component } from '@angular/core';
// import { Post } from '../../posts';
// import { POST } from '../../post_list';
import { Employee } from '../../employee';
import { EMPLOYEE } from '../../employees';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent {
  // posts = POST;
  employees = EMPLOYEE;
  selectedEmployee = {};
  isSelected: boolean;
  employeeSamePosition: any[];

  constructor () {
    this.employeeSamePosition = [];
    this.isSelected = false;
  }

  onSelect(employee) {
    this.selectedEmployee = employee;
    this.isSelected = true;
    console.log(this.selectedEmployee);
    
  }

  onShow(event) {
    this.isSelected = event;
  }

  onGetData(data) {
    this.selectedEmployee = data;
    this.getListSamePosition (data);
  }
  
  onSelectElm(event) {
    this.isSelected = event;
  }

  getListSamePosition (data) {
    let array = this.employees.filter(el=> el.position === data.position);
    let index = array.findIndex(el => el === data);
    array.splice(index, 1);
    this.employeeSamePosition = array;
  }
}
