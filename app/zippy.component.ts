import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy panel-default panel">
            <div 
                class="zippy-title panel-heading"
                (click)="toggle()">
                <h4 class="panel-title">
                    {{title}}
                    <i
                        class="glyphicon pull-right"
                        [ngClass]="{
                            'glyphicon-chevron-down': !isExpanded,
                            'glyphicon-chevron-up': isExpanded
                        }">
                    </i>
                </h4>
            </div>

            <div
                class="zippy-content panel-body"
                *ngIf="isExpanded">
                <ng-content></ng-content>
            </div>
        </div>
    `
})
export class ZippyComponent{
    isExpanded=false;

    @Input() title:String;

    toggle(){
        this.isExpanded = !this.isExpanded
    }
}