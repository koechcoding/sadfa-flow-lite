import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenUsername',
  standalone: true
})
export class ShortenUsernamePipe implements PipeTransform {

  transform(user: string, length: number): any {
    // user being shorter than length

    if(user.length<=length){
      return user;
    }

    //if user is longer than length

    return user.slice(0, length) + '...';
  }

}
