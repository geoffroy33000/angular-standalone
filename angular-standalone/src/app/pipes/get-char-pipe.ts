import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getchar',
})
export class GetCharPipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    return value[args[0] ?? 0];
  }

}
