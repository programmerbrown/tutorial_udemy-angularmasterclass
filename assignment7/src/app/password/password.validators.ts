import { AbstractControl  } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static isNotValid(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
                if(control.value !== '12345')
                    resolve({ isNotValid: true });
                else 
                    resolve(null);
        });
    } 

    static passwordsShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');

        if(newPassword.value !== confirmPassword.value)
            return {passwordsShouldMatch: true};

        return null;
    }
}