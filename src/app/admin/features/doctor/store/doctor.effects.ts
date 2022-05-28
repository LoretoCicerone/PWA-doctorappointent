import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { DoctorApiService } from "../api/doctor-api.service";
import * as DoctorActions from "./doctor.actions";
@Injectable()
export class DoctorEffects{

    constructor(private doctorApiService : DoctorApiService, private actions$: Actions){

    }

    loadDoctors = createEffect(() =>
    this.actions$.pipe(
      ofType(DoctorActions.loadDoctors),
      mergeMap(() => this.doctorApiService.getAllDoctors()
        .pipe(
          map((data) => DoctorActions.loadDoctorsSuccess({ doctors: data })),
          catchError(error => of(DoctorActions.loadDoctorsFailure()))
        ))
    ));

}