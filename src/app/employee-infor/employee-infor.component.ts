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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.isChecked = true;
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      birthday: [],
      gender: ['', Validators.required],
      code: ['', [Validators.required, Validators.maxLength(6), validateCodeLength, validateCode]],
      team: ['', Validators.required],
      skill: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      jpcertificate: ['', [Validators.required]]
    });
  }

  onChange(event) {
    this.isChecked = (event.srcElement && event.srcElement.value === '0');
    if ( this.isChecked ) {
      this.userForm.controls['jpcertificate'].setValidators([Validators.required]);
      this.userForm.controls['jpcertificate'].updateValueAndValidity()
    } else {
      this.userForm.controls['jpcertificate'].clearValidators()
      this.userForm.controls['jpcertificate'].updateValueAndValidity()
    }
  }

  saveUser () { }

  getTeamValue(value) { }

  get username() { return this.userForm.get('name'); }
  get gender() { return this.userForm.get('gender'); }
  get email() { return this.userForm.get('email'); }
  get userteam() { return this.userForm.get('team'); }
  get skill() { return this.userForm.get('skill'); }
  get code() { return this.userForm.get('code'); }
  get jpcertificate() { return this.userForm.get('jpcertificate'); }
}
