import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AllQuestionsComponent } from './components/admin/all-questions/all-questions.component';
import { UsersComponent } from './components/admin/users/users.component';
import { SingleUserComponent } from './components/admin/users/single-user/single-user.component';
import { QuestionReviewComponent } from './components/admin/question-review/question-review.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { HomePageComponent } from './components/home/home-page/home-page.component';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { LoginComponent } from './components/home/login/login.component';
import { NavbarComponent } from './components/home/navbar/navbar.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { ModalComponent } from './components/home/modal/modal.component';
import { PageNotFoundComponent } from './components/home/page-not-found/page-not-found.component';
import { PrivacyComponent } from './components/home/privacy/privacy.component';
import { QuestionsComponent } from './components/home/questions/questions.component';
import { TagsComponent } from './components/home/tags/tags.component';
import { AskQuestionComponent } from './components/home/questions/ask-question/ask-question.component';
import { QuestionDetailsComponent } from './components/home/questions/question-details/question-details.component';
import { SingleQuestionComponent } from './components/home/questions/single-question/single-question.component';
import { SingleTagComponent } from './components/home/tags/single-tag/single-tag.component';
import { FilterQuestionPipe } from './pipes/filter-question.pipe';
import { ShortenQuestionPipe } from './pipes/shorten-question.pipe';
import { FilterUserPipe } from './pipes/filter-user.pipe';
import { ShortenUsernamePipe } from './pipes/shorten-username.pipe';
import { ModalDirective } from './directives/modal.directive';
import { BackgroundColorDirective } from './directives/background-color/background-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AdminHomeComponent,
    AllQuestionsComponent,
    UsersComponent,
    SingleUserComponent,
    QuestionReviewComponent,
    HomeComponent,
    FooterComponent,
    HomePageComponent,
    LandingPageComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    SignupComponent,
    ModalComponent,
    PageNotFoundComponent,
    PrivacyComponent,
    QuestionsComponent,
    TagsComponent,
    AskQuestionComponent,
    QuestionDetailsComponent,
    SingleQuestionComponent,
    SingleTagComponent,
    FilterQuestionPipe,
    ShortenQuestionPipe,
    FilterUserPipe,
    ShortenUsernamePipe,
    ModalDirective,
    BackgroundColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
