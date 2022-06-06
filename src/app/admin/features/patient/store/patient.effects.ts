import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { PatientApiService } from "../api/patient-api.service";
import * as PatientActions from "./patient.actions";
@Injectable()
export class PatientEffects{

    constructor(private patientApiService : PatientApiService, private actions$: Actions){

    }

    loadPatients = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientActions.loadPatients),
      mergeMap(() => this.patientApiService.getAllPatients()
        .pipe(
          map((data) => PatientActions.loadPatientsSuccess({ patients: data })),
          catchError(error => of(PatientActions.loadPatientsFailure()))
        ))
    ));

}