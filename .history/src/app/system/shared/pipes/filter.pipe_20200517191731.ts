import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wfmFilter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any, value: string, field: any): any {
    if (items.length === 0 || !value) {
      return items;
    }

    return items.filter((i: any) => {
      const t = Object.assign({}, i);
      if (!isNaN(t[field])) {
        t[field] += ' ';
      }

      if (field === 'type' && t[field] === undefined) {
        t[field] = 'income';
      }

      return t[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;


    });

  }
}
