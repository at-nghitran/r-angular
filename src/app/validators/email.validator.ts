import { FormControl } from '@angular/forms';

export function validateEmail(control: FormControl) {
  const email = new RegExp ("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  if (email.test(control.value)) {
    return null;
  } else {
    return {
      emailInvalid: true
    };
  }
}

