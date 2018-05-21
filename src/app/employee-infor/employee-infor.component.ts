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
  isChecked: string;
  team: FormGroup;

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.isChecked = 'JP';
    this.userForm = fb.group({
      name: ['', Validators.required],
      birthday: [],
      gender: ['', Validators.required],
      code: ['', [Validators.required, Validators.maxLength(6), validateCodeLength, validateCode]],
      team: ['', Validators.required],
      skill: ['', Validators.required],
      email: ['', [Validators.required, validateEmail]],
      jpcertificate: ['', this.isChecked === 'JP' ? null : Validators.required],
    });
  }

  ngOnInit() {
  }

  onChange(event) {
    this.isChecked = event.target.defaultValue;
  }

  saveUser () { }

  getTeamValue(value) {
    this.team = value.target.value.split(',');
    const arr = [];
    this.team.forEach(element => {
      arr.push(element.trim());
    });
    this.team = arr;
  }

  get username() { return this.userForm.get('name'); }
  get gender() { return this.userForm.get('gender'); }
  get email() { return this.userForm.get('email'); }
  get userteam() { return this.userForm.get('team'); }
  get skill() { return this.userForm.get('skill'); }
  get code() { return this.userForm.get('code'); }
}
