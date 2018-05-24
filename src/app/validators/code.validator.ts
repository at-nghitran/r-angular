import { FormControl } from '@angular/forms';

export function validateCode(control: FormControl) {
  const codeDefault = new RegExp ('(AT)([0-9]{4})');
  if (codeDefault.test(control.value)) {
    return null;
  } else {
    return {
      codeInvalid: true
    };
  }
}

export function validateCodeLength(control: FormControl) {
  if (control.value.length < 6 ) {
    return {
      codeInvalidLength: true
    };
  } else {
    return null;
  }
}
