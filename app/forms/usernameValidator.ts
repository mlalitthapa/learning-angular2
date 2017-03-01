import {Control} from 'angular2/common'

export class UsernameValidator{
    static noSpace(control: Control){
        if(control.value.indexOf(' ') >= 0)
            return {hasSpace: true}

        return null;
    }

    static unique(control: Control){
        return new Promise((resolve, reject) => {
            setTimeout(function(){
                if(control.value == 'lalit')
                    resolve({ unique: true })
                else
                    resolve(null)
            }, 1000)
        })
    }
}