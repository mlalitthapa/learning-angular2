import {Component} from 'angular2/core'
import {ZippyComponent} from './zippy.component'

@Component({
    selector: 'accordion',
    template: `
        <div class="panel-group">
            <zippy *ngFor="#collapsible of collapsibles" title="{{collapsible.title}}">
                {{ collapsible.content }}
            </zippy>
        </div>
    `,
    directives: [ZippyComponent]
})
export class AccordionComponent {

    collapsibles = [
        {
            title: 'Who can see my stuff?',
            content: 'Content of who can see my stuff'
        },
        {
            title: 'Who can contact me?',
            content: 'Content of who can contact me.'
        }
    ]

}