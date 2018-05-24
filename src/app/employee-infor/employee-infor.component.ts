import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
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
  skills: any[] = [];

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
      skills: this.fb.array([this.initItem()]),
      email: ['', [Validators.required, Validators.email]],
      jpcertificate: ['', [Validators.required]]
    });
  }

  onChange(event) {
    this.isChecked = (event.srcElement && event.srcElement.value === '0');
    if (this.isChecked) {
      this.userForm.controls['jpcertificate'].setValidators([Validators.required]);
      this.userForm.controls['jpcertificate'].updateValueAndValidity();
    } else {
      this.userForm.controls['jpcertificate'].clearValidators();
      this.userForm.controls['jpcertificate'].updateValueAndValidity();
    }
  }

  saveUser() {
    console.log(this.userForm.value);
  }

  initItem() {
    return this.fb.group({
      skill: ['', Validators.required]
    });
  }

  addItem () {
    const control  = this.userForm.controls['skills'] as FormArray;
    control.push(this.initItem());
    console.log('aaa');
  }

  removeItem (index: number) {
    const control  = this.userForm.get('skills') as FormArray;
    control.removeAt(index);
  }

  getTeamValue(value) { }
}
