import { Component, OnInit, Inject } from '@angular/core';
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
  isChecked: boolean;
  team: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.isChecked = true;
    this.userForm = fb.group({
      name: ['', Validators.required],
      birthday: [],
      gender: ['', Validators.required],
      code: ['', [Validators.required, Validators.maxLength(6), validateCodeLength, validateCode]],
      team: ['', Validators.required],
      skill: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jpcertificate: ''
    });
  }

  ngOnInit() {
  }

  onChange(event) {
    this.isChecked = (event.srcElement && event.srcElement.value === '0');
    console.log(this.isChecked);
  }

  saveUser () { }

  getTeamValue(value) {
    console.log(value.value);
  }

  get username() { return this.userForm.get('name'); }
  get gender() { return this.userForm.get('gender'); }
  get email() { return this.userForm.get('email'); }
  get userteam() { return this.userForm.get('team'); }
  get skill() { return this.userForm.get('skill'); }
  get code() { return this.userForm.get('code'); }
  get jpcertificate() { return this.userForm.get('jpcertificate'); }
}
