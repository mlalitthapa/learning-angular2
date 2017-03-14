import {Component} from 'angular2/core'
import {ROUTER_DIRECTIVES} from 'angular2/router'
import {Router} from 'angular2/router'

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar/navbar.template.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavbarComponent{
    constructor(public router: Router){}
}