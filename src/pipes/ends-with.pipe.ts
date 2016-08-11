import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'endsWith'
})

export class EndsWithPipe implements PipeTransform {
    transform(value: string, ends: string, sensitive: boolean): string {
        let position;

        value = (sensitive) ? value : value.toLowerCase();
        position = value.length - ends.length;

        return value.indexOf((sensitive) ? ends : ends.toLowerCase(), position) !== -1;
    }
}
