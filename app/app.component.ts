import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from './home/home.component'
import {NavbarComponent} from './navbar/navbar.component'
import {PostsComponent} from './posts/posts.component'
import {UsersComponent} from './users/users.component'

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path:'/posts', name: 'Posts', component: PostsComponent },
    { path:'/users', name: 'Users', component:UsersComponent },
    { path:'/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}