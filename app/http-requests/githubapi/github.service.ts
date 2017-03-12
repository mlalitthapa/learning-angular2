import {Http} from 'angular2/http'
import {Injectable} from 'angular2/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class GithubService {

    private _baseUrl = 'https://api.github.com/users/';

    constructor(private _http: Http){}

    getUser(username: string){
        return this._http.get(this._baseUrl + username)
                    .map(res => res.json());
    }

    getFollowers(username: string){
        return this._http.get(this._baseUrl + username + '/followers')
                    .map(res => res.json());
    }

    getUserWithFollowers(username: string){
        return Observable.forkJoin(
            this.getUser(username),
            this.getFollowers(username)
        );
    }

}