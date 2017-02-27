import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
    selector: 'vote',
    template: `
        <div>
            <h4>Vote Component</h4>
            <i 
                class="glyphicon glyphicon-menu-up"
                [class.active]="myVote == 1"
                (click)="onVoteUp()"
            ></i>

            <span>{{ totalVotes + myVote }}</span>

            <i 
                class="glyphicon glyphicon-menu-down"
                [class.active]="myVote == -1"
                (click)="onVoteDown()"
            ></i>
        </div>
    `,
    styles: [`
        div {
            width: 20px;
            padding: 10px;
            font-size: 20px;
            font-weight: bold;
            text-align: center;
        }
        .glyphicon {
            cursor: pointer;
        }

        .active{
            color: orange;
        }
    `]
})
export class VoteComponent {

    @Input() totalVotes = 0;
    @Input() myVote = 0;

    @Output() voted = new EventEmitter()

    onVoteUp(){
        if(this.myVote == 1)
            return;
            
        this.myVote++
        this.fireEvent()
    }

    onVoteDown(){
        if(this.myVote == -1)
            return
            
        this.myVote--
        this.fireEvent()
    }

    fireEvent(){
        this.voted.emit({
            myVote: this.myVote
        })
    }

}