import { createEffect, ofType,Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { map, mergeMap, catchError } from "rxjs/operators";
import { Observable } from "rxjs";

import { CompanyService } from "../../services/org.service";


import * as companiesActions from "../actions/org.actions";



@Injectable()
export class CompaniesEffects {
    constructor(private actions$: Actions, private companyService: CompanyService) {}
    
    loadCompanies$ = createEffect(() =>
        this.actions$.pipe(
        ofType(companiesActions.loadCompanies),
        mergeMap(() =>
            this.companyService.getCompanies().pipe(
            map((companies) => companiesActions.loadCompaniesSuccess({ companies })),
            catchError(async (error) => companiesActions.loadCompaniesError({ error }))
            )
        )
        )
    );
    }