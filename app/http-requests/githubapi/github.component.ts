import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {OnInit} from 'angular2/core';
import {GithubService} from './github.service'

@Component({
    selector: 'github',
    template: `
        <div *ngIf="loading">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
        </div>
        
        <div *ngIf="!loading">
            <h3>@{{ user.login }}</h3>
            <img class="avatar" src="{{ user.avatar_url }}">
            <h3>Followers</h3>
            <div class="media" *ngFor="#follower of followers">
                <div class="media-left">
                    <a href="{{ follower.url }}">
                    <img class="avatar media-object" src="{{ follower.avatar_url }}" alt="{{ follower.login }}">
                    </a>
                </div>
                <div class="media-body">
                    <h4 class="media-heading">{{ follower.login }}</h4>
                </div>
            </div>
        </div>
    `,
    styles: [`
        .avatar {
            height: 100;
            width: 100;
            border-radius: 100%;
        }
    `],
    providers: [GithubService, HTTP_PROVIDERS]
})
export class GithubComponent implements OnInit{

    loading = true;
    username = 'octocat';
    user = {};
    followers = [];

    constructor(private _githubService: GithubService){}

    ngOnInit(){
        this._githubService.getUserWithFollowers(this.username)
            .subscribe(result => {
                this.user = result[0];
                this.followers = result[1];
            },
            null,
            () => {
                this.loading = false;
            });
    }

}