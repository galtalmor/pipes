import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'ltrim'
})

class LtrimPipe implements PipeTransform {
    transform(value: string, chars: string): any {
        var trim = chars || '\\s';

        return value.replace(new RegExp('^' + trim + '+'), '');
    }
}