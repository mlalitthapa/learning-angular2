import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {AddUserComponent} from './users/add-user.component'
import {HomeComponent} from './home/home.component'
import {NavbarComponent} from './navbar/navbar.component'
import {PostsComponent} from './posts/posts.component'
import {UsersComponent} from './users/users.component'

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent, useAsDefault: true },
    { path:'/posts', name: 'Posts', component: PostsComponent },
    { path:'/users', name: 'Users', component:UsersComponent },
    { path:'/users/add', name:'Add User', component:AddUserComponent },
    { path:'/*other', name: 'Other', redirectTo: ['Home'] }
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [NavbarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
}