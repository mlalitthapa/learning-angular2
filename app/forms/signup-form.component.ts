import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';
import {UsernameValidator} from './usernameValidator'

@Component({
    selector: 'signup-form',
    templateUrl: 'app/forms/signup-form.component.html'
})
export class SignupFormComponent{
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // })

    form: ControlGroup;

    constructor(fb: FormBuilder){
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required, 
                UsernameValidator.noSpace
            ])],
            password: ['', Validators.required]
        })
    }

    signup(){
        console.log(this.form.value)
    }
}