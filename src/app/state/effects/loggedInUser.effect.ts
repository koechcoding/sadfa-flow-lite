import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Injectable } from "@angular/core";

import { AuthService } from "src/app/services/auth.service";


import * as loginActions from "../actions/loggedInUser.actions";



@Injectable()
export class LoggedInUserEffects {
    constructor(private actions$: Actions, private loginService: AuthService) {}

    login$ = createEffect(() =>
        this.actions$.pipe(
        ofType(loginActions.login),
        mergeMap((action) =>
            this.loginService.login().pipe(
            map((user) => loginActions.loginSuccess({ user })),
            catchError(async (error) => loginActions.loginError({ error }))
            )
        )
        )
    );
    }