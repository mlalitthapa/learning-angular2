import {Component, OnInit} from 'angular2/core'
import {HTTP_PROVIDERS} from 'angular2/http'
import {ROUTER_DIRECTIVES} from 'angular2/router'

import {UsersService} from './users.service'

@Component({
    template: `
        <h3>Users</h3>
        <div *ngIf="isLoading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>

        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="#user of users">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td><span class="glyphicon glyphicon-edit"></span></td>
                    <td><span class="glyphicon glyphicon-remove"></span></td>
                </tr>
            </tbody>
        </table>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [UsersService, HTTP_PROVIDERS]
})
export class UsersComponent implements OnInit {

    isLoading = true;
    users;

    constructor(private _usersService: UsersService){}

    ngOnInit(){
        this._usersService.getUsers()
            .subscribe(users => {
                this.isLoading = false;
                this.users = users;
            })
    }
}