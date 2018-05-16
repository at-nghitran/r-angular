import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../../../employee';
import { GetListService } from '../../../services/getList/get-list.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})

export class EmployeeDetailComponent implements OnInit {

  employeesSamePositions: any;
  employee: Employee;
  @Input() selectedEmployeeId: string;
  @Input() employees: Employee;
  @Input() isSelected: boolean;
  @Output() showComponent = new EventEmitter<boolean>();

  constructor(private getlistService: GetListService) { }

  ngOnInit() {
    this.employee = this.getlistService.getDetailMember(this.employees, this.selectedEmployeeId);
    this.employeesSamePositions = this.getlistService.getSameMember(this.employees, this.employee);
  }

  onClick() {
    this.showComponent.emit(false);
  }

  onSelect(id) {
    this.employee = this.getlistService.getDetailMember(this.employees, id);
  }
}
