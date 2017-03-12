System.register(['angular2/core', 'angular2/http', './github.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, github_service_1;
    var GithubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            }],
        execute: function() {
            GithubComponent = (function () {
                function GithubComponent(_githubService) {
                    this._githubService = _githubService;
                    this.loading = true;
                    this.username = 'octocat';
                    this.user = {};
                    this.followers = [];
                }
                GithubComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._githubService.getUserWithFollowers(this.username)
                        .subscribe(function (result) {
                        _this.user = result[0];
                        _this.followers = result[1];
                    }, null, function () {
                        _this.loading = false;
                    });
                };
                GithubComponent = __decorate([
                    core_1.Component({
                        selector: 'github',
                        template: "\n        <div *ngIf=\"loading\">\n            <i class=\"fa fa-spinner fa-spin fa-3x\"></i>\n        </div>\n        \n        <div *ngIf=\"!loading\">\n            <h3>@{{ user.login }}</h3>\n            <img class=\"avatar\" src=\"{{ user.avatar_url }}\">\n            <h3>Followers</h3>\n            <div class=\"media\" *ngFor=\"#follower of followers\">\n                <div class=\"media-left\">\n                    <a href=\"{{ follower.url }}\">\n                    <img class=\"avatar media-object\" src=\"{{ follower.avatar_url }}\" alt=\"{{ follower.login }}\">\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                    <h4 class=\"media-heading\">{{ follower.login }}</h4>\n                </div>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .avatar {\n            height: 100;\n            width: 100;\n            border-radius: 100%;\n        }\n    "],
                        providers: [github_service_1.GithubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubComponent);
                return GithubComponent;
            })();
            exports_1("GithubComponent", GithubComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map