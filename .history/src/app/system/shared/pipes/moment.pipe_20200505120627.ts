import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wfmMoment'
})

export class MomentPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }

}
