import {Component, Input} from 'angular2/core'
import {LikeComponent} from './like.component'

@Component({
    selector: 'tweet',
    templateUrl: 'app/tweet.template.html',
    directives: [LikeComponent]
})
export class TweetComponent{
    @Input() data;
}