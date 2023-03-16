import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Question } from 'src/app/interfaces/question.interface';
import { AdminSingleQuestionComponent } from './admin-single-question/admin-single-question.component';

@Component({
  selector: 'app-all-questions',
  standalone: true,
  imports: [CommonModule, AdminSingleQuestionComponent],
  templateUrl: './all-questions.component.html',
  styleUrls: ['./all-questions.component.css']
})
export class AllQuestionsComponent {
  questions: Question[] = [];

  constructor(private store: Store<AppState>){
    this.store.select(selectQuestions).subscribe((questions)=>{
      this.questions = questions
    })
  }
}
