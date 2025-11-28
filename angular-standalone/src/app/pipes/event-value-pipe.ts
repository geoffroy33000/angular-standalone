import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventvalue',
})
export class EventValuePipe implements PipeTransform {

  transform(values: number[]): number[] {
    return values.filter(v => v % 2 == 0);
  }

}
