import {Component} from 'angular2/core'
import {ControlGroup, Validators, FormBuilder} from 'angular2/common'
import {PasswordValidator} from './passwordValidator'

@Component({
    selector: 'change-password',
    templateUrl: 'app/forms/change-password.component.html'
})
export class ChangePasswordComponent{
    
    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            old_password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(3)

            ])],
            new_password: ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
            ])],
            confirm_password: ['', Validators.required]
        }, { validator: PasswordValidator.match})
    }

    changePassword(){

        var oldPassword = this.form.find('old_password');

        if(oldPassword.value != '1234')
            oldPassword.setErrors({validPassword: true})

        if(this.form.valid)
            alert('Password successfully changed!');

    }

}