import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultTypePipe'
})
export class DefaultTypePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
