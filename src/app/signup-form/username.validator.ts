import { ValidationErrors, AbstractControl } from '@angular/forms';
export class UsernameValidators {
   static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {

        if ((control.value as string).indexOf(' ') !== -1) {
            return {
                cannotContainsSpace: true
            };
        }
    }
}
