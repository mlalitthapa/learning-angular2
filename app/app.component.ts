import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component'
import {TweetsComponent} from './tweets.component'
import {AccordionComponent} from './accordion.component'

@Component({
    selector: 'my-app',
    template: `
        <accordion></accordion>
    `,
    directives: [AccordionComponent]
})
export class AppComponent {

    
    
 }