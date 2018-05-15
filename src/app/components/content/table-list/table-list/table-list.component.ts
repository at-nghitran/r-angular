import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor() { }

  @Input() employees;
  @Input() isSelected;
  @Output() GetData = new EventEmitter<object>();
  @Output() SelectElm = new EventEmitter<boolean>();

  ngOnInit() {
  }

  onSelect(data) {
    this.GetData.emit(data);
    this.SelectElm.emit(true);
  }
}
