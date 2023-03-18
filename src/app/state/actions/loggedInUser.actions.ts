import { createAction, props } from "@ngrx/store/src";
import { loggedInUser } from "src/app/interfaces/loggedInUser.interface";
import { userToLogin } from "src/app/interfaces/login.interface";


export const login = createAction("[Login] Login", props<{ user: userToLogin }>());

export const loginSuccess = createAction("[Login] Login Success", props<{ user: loggedInUser}>() );

export const loginError = createAction( '[Login] Login Error', props<{ error: any }>());