System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PasswordValidator;
    return {
        setters:[],
        execute: function() {
            PasswordValidator = (function () {
                function PasswordValidator() {
                }
                PasswordValidator.match = function (group) {
                    var password = group.find('new_password');
                    var confirm_password = group.find('confirm_password');
                    if (password.value != confirm_password.value)
                        return { match: true };
                    return null;
                };
                return PasswordValidator;
            }());
            exports_1("PasswordValidator", PasswordValidator);
        }
    }
});
//# sourceMappingURL=passwordValidator.js.map