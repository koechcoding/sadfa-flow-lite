import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from '../../users/users.component';
import { QuestionReviewComponent } from '../question-review/question-review.component';
import { RouterModule } from '@angular/router';
import { UserStatisticsComponent } from '../user-review/user-review.component';
import { AllQuestionsComponent } from '../all-questions/all-questions.component';
@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [CommonModule, AllQuestionsComponent, UsersComponent, UserStatisticsComponent, UserStatisticsComponent, RouterModule],
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

}
