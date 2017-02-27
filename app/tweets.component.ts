import {Component} from 'angular2/core'
import {TweetService} from './tweet.service'
import {TweetComponent} from './tweet.component'

@Component({
    selector: 'tweets',
    template: `
        <h3>Tweets</h3>
        <div *ngFor="#tweet of tweets">
            <tweet [data]="tweet"></tweet>
        </div>
    `,
    styles: [`
        div {
            padding: 5px;
        }
    `],
    providers: [TweetService],
    directives: [TweetComponent]
})
export class TweetsComponent{
    tweets;

    constructor(tweetService: TweetService){
        this.tweets = tweetService.getTweets()
    }
}