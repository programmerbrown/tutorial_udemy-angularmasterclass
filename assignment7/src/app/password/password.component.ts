import { Component    } from '@angular/core';
import { FormGroup    } from '@angular/forms';
import { FormControl  } from '@angular/forms'; 
import { Validators   } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {
  form = new FormGroup({
    oldPassword: new FormControl('', Validators.required, PasswordValidators.isNotValid),
    newPassword: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, PasswordValidators.passwordsShouldMatch);

  submit() {
    console.log("ok");
  }

  passwordsNotTheSame() {
    return this.oldPassword.value !== this.confirmPassword.value;
  }
  
  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }
}
