import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { questionsReducer } from './state/reducers/questions.reducer';
import { QuestionEffects } from './state/effects/question.effect';
import { usersReducer } from './state/reducers/users.reducer';
import { UserEffects } from './state/effects/user.effect';
import { tagsReducer } from './state/reducers/tags.reducer';
import { TagsEffects } from './state/effects/tag.effect';
import { companiesReducer } from './state/reducers/org.reducer';
import { CompaniesEffects } from './state/effects/org.effect';
import { _loggedInUserReducer } from './state/reducers/loggedInUser.reducer';
import { LoggedInUserEffects } from './state/effects/loggedInUser.effect';
import { RegisterUserEffects } from './state/effects/registerUser.effect';
import { registerUserReducer } from './state/reducers/registerUser.reducer';


import { HomePageComponent } from './components/home/home-page/home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/home/login/login.component';
import { LandingPageComponent } from './components/home/landing-page/landing-page.component';
import { SignupComponent } from './components/home/signup/signup.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { QuestionDetailsComponent } from './components/questions/question-details/question-details.component';
import { UsersComponent } from './components/users/users.component';
import { CompaniesComponent } from './components/organizations/org.component';
import { TagsComponent } from './components/tags/tags.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AskQuestionComponent } from './components/questions/ask-question/ask-question.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { AllQuestionsComponent } from './components/admin/all-questions/all-questions.component';
import { AllUsersComponent } from './components/admin/users/users.component';

const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, children: [
    { path: '', component: LandingPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'questions', component: QuestionsComponent},
    { path: 'questions/:id', component: QuestionDetailsComponent},
    { path: 'users', component: UsersComponent},
    { path: 'companies', component: CompaniesComponent},
    { path: 'tags', component: TagsComponent},
    { path: 'ask-question', component: AskQuestionComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'privacy', component: PrivacyComponent},
    { path: '**', component: PageNotFoundComponent}


  ]

},

{ path: 'admin', component: AdminHomeComponent,
children : [
  { path: '', component: AllQuestionsComponent},
  { path: 'questions', component: AllQuestionsComponent},
  { path: 'users', component: AllUsersComponent},
  { path: '**', component: PageNotFoundComponent}

]},
{ path: '**', component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot({ questions: questionsReducer, users: usersReducer, tags: tagsReducer, companies: companiesReducer , loggedInUser: _loggedInUserReducer, router: routerReducer, registerUser: registerUserReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([QuestionEffects, UserEffects, TagsEffects, CompaniesEffects, LoggedInUserEffects, RegisterUserEffects]),
    MatIconModule,
    RouterModule.forRoot(router),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
