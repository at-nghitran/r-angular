import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { validateCode, validateCodeLength } from '../validators/code.validator';
import { validateEmail } from '../validators/email.validator';

@Component({
  selector: 'app-employee-infor',
  templateUrl: './employee-infor.component.html',
  styleUrls: ['./employee-infor.component.css']
})
export class EmployeeInforComponent implements OnInit {

  userForm: FormGroup;
  isChecked: string;
  team: FormControl;

  constructor() {
    this.isChecked = 'JP';
  }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      birthday: new FormControl(''),
      gender: new FormControl('', Validators.required),
      code: new FormControl('', [Validators.required, Validators.maxLength(6), validateCodeLength, validateCode]),
      team: new FormControl('', [Validators.required]),
      skill: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, validateEmail]),
      jpcertificate: new FormControl(''),
    });
  }

  saveUser() {
    console.log(this.userForm.value);
  }

  onChange(event) {
    this.isChecked = event.target.defaultValue;
  }

  getTeamValue(value) {
    this.team = value.target.value.split(',');
    const arr = [];
    this.team.forEach(element => {
      arr.push(element.trim());
    });
    this.team = arr;
  }
}
