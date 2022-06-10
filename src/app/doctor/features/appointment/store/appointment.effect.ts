import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { AppointmentApiService } from "../api/appointment-api.service";
import * as AppointmentActions from './appointment.actions';


@Injectable()
export class AppointmentEffects{

    constructor(private appointmentApiService : AppointmentApiService, private actions$ : Actions){

    }

    loadAppointments = createEffect(() =>
    this.actions$.pipe(
      ofType(AppointmentActions.loadAppointments),
      mergeMap(() => this.appointmentApiService.getAllAppointments()
        .pipe(
          map((data) => AppointmentActions.loadAppointmentsSuccess({ appointments: data })),
          catchError(error => of(AppointmentActions.loadAppointmentsFailure()))
        ))
    ));


}