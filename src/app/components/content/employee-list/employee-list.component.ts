import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetListService } from '../../../services/getList/get-list.service';

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
  data: any;

  constructor(private getlistService: GetListService) {
  }

  ngOnInit() {
    this.getlistService.getListMember().subscribe(data => {
      this.employees = data;
    });
  }

  onSelectElm(data) {
    this.SelectElement.emit(data);
  }

  onGetData(employee) {
    this.Sendata.emit(employee);
  }
}
