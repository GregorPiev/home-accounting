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
      if (!isNaN(i[field])) {
        i[field] += ' ';
      }

      console.log('type 1:', i[field]);
      if (field === 'type' && i[field] === undefined) {
        console.log(i[field]);
        i[field] = 'income';
      }
      console.log('type 2:', i[field]);
      return i[field].toLowerCase().indexOf(value.toLowerCase()) !== -1;


    });

  }
}
