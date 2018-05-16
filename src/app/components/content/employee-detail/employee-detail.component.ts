import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { Employee } from '../../../employee';
import { GetListService } from '../../../services/getList/get-list.service';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})

export class EmployeeDetailComponent implements OnInit, OnDestroy, AfterViewInit {

  // @Input() employee: Employee;
  employee: Employee;
  @Input() selectedEmployeeId: string;
  @Input('employees') employees: Employee;
  @Input() isSelected: boolean;
  @Output() showComponent = new EventEmitter<boolean>();

  constructor(private getlistService: GetListService) { }

  ngOnInit() {
    this.employee = this.getlistService.getDetailMember(this.employees, this.selectedEmployeeId);
  }

  ngAfterViewInit() {
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
