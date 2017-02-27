import {Component, Input} from 'angular2/core'

@Component({
    selector: 'like',
    templateUrl: 'app/like.template.html',
    styles: [`
        div{
            font-size: 25px;
            font-weight: bold;
        }
        .glyphicon-heart {
            color: #ccc;
            cursor: pointer;
        }
        .glyphicon-heart.active {
            color: deeppink;
        }
    `]
})
export class LikeComponent {
    @Input() isLiked = false;
    @Input() likes = 0;

    onClick(){
        this.isLiked = !this.isLiked
        this.likes += this.isLiked ? 1 : -1
    }
}