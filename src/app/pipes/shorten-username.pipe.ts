import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenUsername'
})
export class ShortenUsernamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
