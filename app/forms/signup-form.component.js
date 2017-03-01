System.register(['angular2/core', 'angular2/common', './usernameValidator'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, usernameValidator_1;
    var SignupFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (usernameValidator_1_1) {
                usernameValidator_1 = usernameValidator_1_1;
            }],
        execute: function() {
            SignupFormComponent = (function () {
                function SignupFormComponent(fb) {
                    this.form = fb.group({
                        username: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                usernameValidator_1.UsernameValidator.noSpace
                            ]), usernameValidator_1.UsernameValidator.unique],
                        password: ['', common_1.Validators.required]
                    });
                }
                SignupFormComponent.prototype.signup = function () {
                    console.log(this.form.value);
                };
                SignupFormComponent = __decorate([
                    core_1.Component({
                        selector: 'signup-form',
                        templateUrl: 'app/forms/signup-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], SignupFormComponent);
                return SignupFormComponent;
            }());
            exports_1("SignupFormComponent", SignupFormComponent);
        }
    }
});
//# sourceMappingURL=signup-form.component.js.map