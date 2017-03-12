import {Component} from 'angular2/core';
import {GithubComponent} from './http-requests/githubapi/github.component'

@Component({
    selector: 'my-app',
    template: `
        <github></github>
    `,
    directives: [GithubComponent]
})
export class AppComponent {

    isLoading = true;
    
    constructor(){
        
    }

}