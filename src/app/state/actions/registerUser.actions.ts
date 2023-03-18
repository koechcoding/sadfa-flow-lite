import { createAction, props } from "@ngrx/store/src";
import { loggedInUser } from "src/app/interfaces/loggedInUser.interface";
import { userToRegister } from "src/app/interfaces/register.interface";


export const register = createAction( '[Register] Register', props<{ user: userToRegister }>());


export const registerSuccess = createAction( '[Register] Register Success', props<{ user: loggedInUser }>());


export const registerError = createAction( '[Register] Register Error', props<{ error: any }>());