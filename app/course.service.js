System.register([], function(exports_1) {
    var CourseService;
    return {
        setters:[],
        execute: function() {
            CourseService = (function () {
                function CourseService() {
                }
                CourseService.prototype.getCourses = function () {
                    return ['JAVA', 'C++', 'PHP', 'HTML'];
                };
                return CourseService;
            })();
            exports_1("CourseService", CourseService);
        }
    }
});
//# sourceMappingURL=course.service.js.map