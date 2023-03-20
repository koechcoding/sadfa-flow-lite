import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { loggedInUser } from 'src/app/interfaces/loggedInUser.interface';
import * as registerUserActions from 'src/app/state/actions/registerUser.actions'
import { Router } from '@angular/router';
import { userToRegister } from 'src/app/interfaces/register.interface';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private store: Store<AppState>, private router: Router) { }


  registerUser(user: userToRegister) {
    return new Observable<loggedInUser>(observer => {

      setTimeout(() => {
        this.store.dispatch(registerUserActions.register({ user }));
        observer.next({ id: '1', username: 'test', email: 'test@gmail.com', token: 'test' }); 
      },4000);
    });
  }






}
