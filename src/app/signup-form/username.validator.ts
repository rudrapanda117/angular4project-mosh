import {
  ValidationErrors,
  AbstractControl
} from '@angular/forms';
export class UsernameValidators {
  static cannotContainsSpace(control: AbstractControl): ValidationErrors | null {

    if ((control.value as string).indexOf(' ') !== -1) {
        console.log("cannotContainsSpace");
      return {
        cannotContainsSpace: true
      };
    }
  }

  static shouldBeUnique(control: AbstractControl): Promise < ValidationErrors | null > {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "mosh") {
            console.log("shouldBeUnique true");
          resolve({
            shouldBeUnique: true
          });
        } else {
            console.log("shouldBeUnique false");
          resolve(null);
        }
      }, 2000);
    });
  }
}
