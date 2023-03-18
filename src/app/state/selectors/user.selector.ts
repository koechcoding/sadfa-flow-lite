import { createFeatureSelector } from "@ngrx/store";
import { UsersState } from "../reducers/users.reducer";
import { User } from "src/app/interfaces/user.interface";


export const selectUsersState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(
    selectUsersState,
    (state: UsersState)=> state.users
);

