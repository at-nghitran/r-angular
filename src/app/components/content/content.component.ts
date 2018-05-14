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
  isSelected = false;

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
