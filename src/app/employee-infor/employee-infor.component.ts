import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-infor',
  templateUrl: './employee-infor.component.html',
  styleUrls: ['./employee-infor.component.css']
})
export class EmployeeInforComponent implements OnInit {

  userForm: any;
  emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  constructor() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      team: new FormControl('', Validators.required),
      skill: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)])
    });
  }

  ngOnInit() {
  }

  saveUser() {
    console.log(this.userForm.controls.gender.value);
  }
}
