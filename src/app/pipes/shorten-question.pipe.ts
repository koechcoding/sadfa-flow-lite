import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenQuestion',
  standalone: true
})
export class ShortenQuestionPipe implements PipeTransform {

  transform(question: string, length: number): string {
    //taking in questions and length

    if(question.length<=length){
      return question
    }

    //question longer than length

    return question.slice(0, length) + '...';
  }

}
