import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-infor',
  templateUrl: './employee-infor.component.html',
  styleUrls: ['./employee-infor.component.css']
})
export class EmployeeInforComponent implements OnInit {

  userForm: any;
  isChecked: string;
  team: any;
  emailRegex = "[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?";

  constructor() {
    this.isChecked = 'JP';
    this.userForm = new FormGroup({
      name: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      code: new FormControl('', [Validators.required, Validators.maxLength(6), Validators.pattern('^(AT)([0-9][0-9][0-9][0-9])$')]),
      team: new FormControl('', [Validators.required]),
      skill: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.emailRegex)])
    });
  }

  ngOnInit() {
  }

  saveUser() {
    console.log(this.userForm.controls.gender.value);
  }

  onChange(event) {
    this.isChecked = event.target.defaultValue;
  }

  validateCode(code) {
  }

  getTeamValue(value) {
    this.team = value.target.value.split(',');
    const arr = [];
    this.team.forEach(element => {
      arr.push(element.trim());
    });
    this.team = arr;
    console.log('team:', this.team);
  }

  validationTeam(team) {
    if (team.isArray()) {
      return true;
    } else {
      return false;
    }
  }
}
