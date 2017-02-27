import {Component} from 'angular2/core';
import {ContactFormComponent} from './forms/contact-form.component'

@Component({
    selector: 'my-app',
    template: `
        <contact-form></contact-form>
    `,
    directives: [ContactFormComponent]
})
export class AppComponent {
 }