System.register([], function(exports_1) {
    var UsernameValidator;
    return {
        setters:[],
        execute: function() {
            UsernameValidator = (function () {
                function UsernameValidator() {
                }
                UsernameValidator.noSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { hasSpace: true };
                    return null;
                };
                UsernameValidator.unique = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == 'lalit')
                                resolve({ unique: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                return UsernameValidator;
            })();
            exports_1("UsernameValidator", UsernameValidator);
        }
    }
});
//# sourceMappingURL=usernameValidator.js.map