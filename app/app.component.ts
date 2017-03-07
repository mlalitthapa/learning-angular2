/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core'
import {FormBuilder, ControlGroup} from 'angular2/common'
import {Observable} from 'rxjs/Rx'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/map'

@Component({
    selector: 'my-app',
    template: `
        <form [ngFormModel]="form">
            <input type="text" ngControl="search" class="form-control">
        </form>
    `
})
export class AppComponent {
    
    form: ControlGroup;

    constructor(fb : FormBuilder){
        this.form = fb.group({
            search: []
        });

        var search = this.form.find('search');

        search.valueChanges
            .debounceTime(400)
            .map(str => (<String>str).replace(' ', '-'))
            .subscribe(x => console.log(x));

        // this.travelSearch();
        // this.timer()
        // this.threads()
        // this.errorHandling()
        // this.retry()
        // this.catchingError()
        this.timeouts()
    };

    travelSearch(){

        var startDates = [];
        var startDate = new Date();

        for(var day = -1; day <= 2; day++){
            var date = new Date(
                startDate.getFullYear(),
                startDate.getMonth(),
                startDate.getDate() + day
            );
            startDates.push(date);
        }

        Observable
            .fromArray(startDates)
            .map(date => {
                console.log("Getting deals for date " + date);
                return [1, 2, 3];
            })
            .subscribe(x => console.log(x))

    }

    timer(){

        var observable = Observable.interval(1000);
        observable
            .flatMap(x => {
                console.log("calling the server")
                return Observable.of([1, 2, 3]);
            })
            .subscribe(news => console.log(news));

    }

    threads(){
        var userstream = Observable.of({
            userId: 1, username: 'Lalit'
        }).delay(2000);

        var tweetstream = Observable.of([1, 2, 3]).delay(1500);

        Observable
            .forkJoin(userstream, tweetstream)
            .map(joined => new Object({
                user: joined[0],
                tweets: joined[1]
            }))
            .subscribe(result => console.log(result));
    }

    errorHandling(){
        var observable = Observable.throw(new Error("Something went wrong."))
        observable.subscribe(
            x => console.log(x),
            error => console.error(error)
        );
    }

    retry(){

        var counter = 0;

        var ajaxCall = Observable.of('url')
            .flatMap(() => {
                if(++counter < 2)
                    return Observable.throw(new Error('Request failed.'))

                return Observable.of([1, 2, 3]);
            })

        ajaxCall
            .retry(3)
            .subscribe(
                x => console.log(x),
                error => console.error(error)
            );

    }

    catchingError(){

        var remoteDataStream = Observable.of([2, 4, 5])

        remoteDataStream
            .catch(err => {
                var localDataStream = Observable.of([1, 2, 3])
                return localDataStream
            })
            .subscribe(x => console.log(x))

    }

    timeouts(){

        var remoteDataStream = Observable.of([1, 2, 3]).delay(5000)

        remoteDataStream
            .timeout(2000)
            .subscribe(
                x => console.log(x),
                error => console.error(error)
            )

    }

}