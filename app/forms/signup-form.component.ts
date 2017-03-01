import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from 'angular2/common';

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
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    signup(){
        console.log(this.form.value)
    }
}