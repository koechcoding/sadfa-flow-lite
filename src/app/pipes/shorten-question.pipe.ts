import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenQuestion'
})
export class ShortenQuestionPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
