import {Component} from 'angular2/core';
import {ChangePasswordComponent} from './forms/change-password.component'

@Component({
    selector: 'my-app',
    template: `
        <change-password></change-password>
    `,
    directives: [ChangePasswordComponent]
})
export class AppComponent {
 }