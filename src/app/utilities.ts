import {AbstractControl} from '@angular/forms';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

export class Utilities {
    
    static MatchPassword(AC: AbstractControl) {
       let password = AC.get('password').value; // to get value in input tag
       let confirmPassword = AC.get('repassword').value; // to get value in input tag
        if(password != confirmPassword) {
            AC.get('repassword').setErrors( {MatchPassword: true} )
        } else {
            return null
        }
    }
    
}
