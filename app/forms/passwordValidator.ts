import {ControlGroup} from 'angular2/common'

export class PasswordValidator{
    static match(group: ControlGroup){
        var password = group.find('new_password');
        var confirm_password = group.find('confirm_password');

        if(password.value != confirm_password.value)
            return {match: true}
        return null;
    }
}