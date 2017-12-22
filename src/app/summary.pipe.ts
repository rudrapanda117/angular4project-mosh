import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'summary'
})
export class SumamryPipe implements PipeTransform {
    transform(value: any, limit?: number, extra?: string) {
            if (!value) {
                return null;
            } else {
                const actualLimit = (limit) ? limit : 50;
                const extraParam = (extra) ? extra : '';
                return value.substring(0, actualLimit) + '...' + extraParam;
            }
    }

}
