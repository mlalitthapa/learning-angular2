import {Component} from 'angular2/core';
import {SignupFormComponent} from './forms/signup-form.component'

@Component({
    selector: 'my-app',
    template: `
        <signup-form></signup-form>
    `,
    directives: [SignupFormComponent]
})
export class AppComponent {
 }