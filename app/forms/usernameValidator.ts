import {Control} from 'angular2/common'

export class UsernameValidator{
    static noSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return {hasSpace: true}

        return null;
    }
}