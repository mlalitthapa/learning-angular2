export class TweetService{
    getTweets(): {
        image: string,
        name: string,
        username: string,
        description: string,
        totalLikes: number,
        isLiked: boolean
    }[] {
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
        ]
    }
}