import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (value.length === 0 || args === undefined ){
      return value;
    }
    let filter = args.toLocaleString();

    return value.filter(
      v => v.toLocaleString().indexOf(filter) != -1
    );
  }

}
