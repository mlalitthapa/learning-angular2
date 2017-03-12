System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var VoteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            VoteComponent = (function () {
                function VoteComponent() {
                    this.totalVotes = 0;
                    this.myVote = 0;
                    this.voted = new core_1.EventEmitter();
                }
                VoteComponent.prototype.onVoteUp = function () {
                    if (this.myVote == 1)
                        return;
                    this.myVote++;
                    this.fireEvent();
                };
                VoteComponent.prototype.onVoteDown = function () {
                    if (this.myVote == -1)
                        return;
                    this.myVote--;
                    this.fireEvent();
                };
                VoteComponent.prototype.fireEvent = function () {
                    this.voted.emit({
                        myVote: this.myVote
                    });
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "totalVotes", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "myVote", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], VoteComponent.prototype, "voted", void 0);
                VoteComponent = __decorate([
                    core_1.Component({
                        selector: 'vote',
                        template: "\n        <div>\n            <h4>Vote Component</h4>\n            <i \n                class=\"glyphicon glyphicon-menu-up\"\n                [class.active]=\"myVote == 1\"\n                (click)=\"onVoteUp()\"\n            ></i>\n\n            <span>{{ totalVotes + myVote }}</span>\n\n            <i \n                class=\"glyphicon glyphicon-menu-down\"\n                [class.active]=\"myVote == -1\"\n                (click)=\"onVoteDown()\"\n            ></i>\n        </div>\n    ",
                        styles: ["\n        div {\n            width: 20px;\n            padding: 10px;\n            font-size: 20px;\n            font-weight: bold;\n            text-align: center;\n        }\n        .glyphicon {\n            cursor: pointer;\n        }\n\n        .active{\n            color: orange;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], VoteComponent);
                return VoteComponent;
            })();
            exports_1("VoteComponent", VoteComponent);
        }
    }
});
//# sourceMappingURL=vote.component.js.map