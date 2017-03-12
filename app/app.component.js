/// <reference path="../typings/tsd.d.ts" />
System.register(['angular2/core', 'angular2/common', 'rxjs/Rx', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/map'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, Rx_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(fb) {
                    this.form = fb.group({
                        search: []
                    });
                    var search = this.form.find('search');
                    search.valueChanges
                        .debounceTime(400)
                        .map(function (str) { return str.replace(' ', '-'); })
                        .subscribe(function (x) { return console.log(x); });
                    // this.travelSearch();
                    // this.timer()
                    // this.threads()
                    // this.errorHandling()
                    // this.retry()
                    // this.catchingError()
                    this.timeouts();
                }
                ;
                AppComponent.prototype.travelSearch = function () {
                    var startDates = [];
                    var startDate = new Date();
                    for (var day = -1; day <= 2; day++) {
                        var date = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + day);
                        startDates.push(date);
                    }
                    Rx_1.Observable
                        .fromArray(startDates)
                        .map(function (date) {
                        console.log("Getting deals for date " + date);
                        return [1, 2, 3];
                    })
                        .subscribe(function (x) { return console.log(x); });
                };
                AppComponent.prototype.timer = function () {
                    var observable = Rx_1.Observable.interval(1000);
                    observable
                        .flatMap(function (x) {
                        console.log("calling the server");
                        return Rx_1.Observable.of([1, 2, 3]);
                    })
                        .subscribe(function (news) { return console.log(news); });
                };
                AppComponent.prototype.threads = function () {
                    var userstream = Rx_1.Observable.of({
                        userId: 1, username: 'Lalit'
                    }).delay(2000);
                    var tweetstream = Rx_1.Observable.of([1, 2, 3]).delay(1500);
                    Rx_1.Observable
                        .forkJoin(userstream, tweetstream)
                        .map(function (joined) { return new Object({
                        user: joined[0],
                        tweets: joined[1]
                    }); })
                        .subscribe(function (result) { return console.log(result); });
                };
                AppComponent.prototype.errorHandling = function () {
                    var observable = Rx_1.Observable.throw(new Error("Something went wrong."));
                    observable.subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                };
                AppComponent.prototype.retry = function () {
                    var counter = 0;
                    var ajaxCall = Rx_1.Observable.of('url')
                        .flatMap(function () {
                        if (++counter < 2)
                            return Rx_1.Observable.throw(new Error('Request failed.'));
                        return Rx_1.Observable.of([1, 2, 3]);
                    });
                    ajaxCall
                        .retry(3)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                };
                AppComponent.prototype.catchingError = function () {
                    var remoteDataStream = Rx_1.Observable.of([2, 4, 5]);
                    remoteDataStream
                        .catch(function (err) {
                        var localDataStream = Rx_1.Observable.of([1, 2, 3]);
                        return localDataStream;
                    })
                        .subscribe(function (x) { return console.log(x); });
                };
                AppComponent.prototype.timeouts = function () {
                    var remoteDataStream = Rx_1.Observable.of([1, 2, 3]).delay(5000);
                    remoteDataStream
                        .timeout(2000)
                        .subscribe(function (x) { return console.log(x); }, function (error) { return console.error(error); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <form [ngFormModel]=\"form\">\n            <input type=\"text\" ngControl=\"search\" class=\"form-control\">\n        </form>\n    "
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map