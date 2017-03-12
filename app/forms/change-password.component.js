System.register(['angular2/core', 'angular2/common', './passwordValidator'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, passwordValidator_1;
    var ChangePasswordComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (passwordValidator_1_1) {
                passwordValidator_1 = passwordValidator_1_1;
            }],
        execute: function() {
            ChangePasswordComponent = (function () {
                function ChangePasswordComponent(fb) {
                    this.form = fb.group({
                        old_password: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(3)
                            ])],
                        new_password: ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                common_1.Validators.minLength(5)
                            ])],
                        confirm_password: ['', common_1.Validators.required]
                    }, { validator: passwordValidator_1.PasswordValidator.match });
                }
                ChangePasswordComponent.prototype.changePassword = function () {
                    var oldPassword = this.form.find('old_password');
                    if (oldPassword.value != '1234')
                        oldPassword.setErrors({ validPassword: true });
                    if (this.form.valid)
                        alert('Password successfully changed!');
                };
                ChangePasswordComponent = __decorate([
                    core_1.Component({
                        selector: 'change-password',
                        templateUrl: 'app/forms/change-password.component.html'
                    }), 
                    __metadata('design:paramtypes', [common_1.FormBuilder])
                ], ChangePasswordComponent);
                return ChangePasswordComponent;
            })();
            exports_1("ChangePasswordComponent", ChangePasswordComponent);
        }
    }
});
//# sourceMappingURL=change-password.component.js.map