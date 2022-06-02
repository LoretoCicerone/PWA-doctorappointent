import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { PrescriptionApiService } from "../api/prescription-api.service";
import * as PrescriptionsActions from './prescription.actions';
@Injectable()
export class PrescriptionEffects{

    constructor(private departmentApiService : PrescriptionApiService, private actions$: Actions){}

    loadPrescriptions = createEffect(() =>
    this.actions$.pipe(
      ofType(PrescriptionsActions.loadPrescriptions),
      mergeMap(() => this.departmentApiService.getAllPrescriptions()
        .pipe(
          map((data) => PrescriptionsActions.loadPrescriptionsSuccess({ prescriptions: data })),
          catchError(error => of(PrescriptionsActions.loadPrescriptionsFailure()))
        ))
    ));
    
}