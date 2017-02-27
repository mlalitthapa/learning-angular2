System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [
                        {
                            image: 'http://lorempixel.com/100/100/people?1',
                            name: 'Lalit',
                            username: '@lalit',
                            description: 'asd fas fa sfd asd',
                            totalLikes: 2,
                            isLiked: false
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people?2',
                            name: 'Thapa',
                            username: '@thapa',
                            description: 'this is the description for the secod tweet',
                            totalLikes: 0,
                            isLiked: false
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people?3',
                            name: 'Magar',
                            username: '@magar',
                            description: 'Here goes the description for the another tweet',
                            totalLikes: 3,
                            isLiked: true
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people?4',
                            name: 'Lalit',
                            username: '@lalit',
                            description: 'asd fas fa sfd asd',
                            totalLikes: 5,
                            isLiked: false
                        },
                        {
                            image: 'http://lorempixel.com/100/100/people?5',
                            name: 'Thapa',
                            username: '@thapa',
                            description: 'this is the description for the secod tweet',
                            totalLikes: 8,
                            isLiked: true
                        }
                    ];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map