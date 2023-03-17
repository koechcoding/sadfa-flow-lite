import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterQuestion',
  standalone: true
})
export class FilterQuestionPipe implements PipeTransform {

  transform(questions:any, search: string): any {
    // if no search string, return all questions
    if(!search){
      return questions
    }

    //filter question if search string
    return questions.filter((question:any)=>{
      return question.title.toLowerCase().includes(search.toLowerCase());
    });
  }

}
