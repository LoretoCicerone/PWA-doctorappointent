import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { DepartmentApiService } from "../api/department-api.service";
import * as DepartmentActions from './department.actions';
@Injectable()
export class DepartmentEffects{

    constructor(private departmentApiService : DepartmentApiService, private actions$: Actions){}
    loadDepartments = createEffect(() =>
    this.actions$.pipe(
      ofType(DepartmentActions.loadDepartments),
      mergeMap(() => this.departmentApiService.getAllDepartments()
        .pipe(
          map((data) => DepartmentActions.loadDepartmentsSuccess({ departments: data })),
          catchError(error => of(DepartmentActions.loadDepartmentsFailure()))
        ))
    ));
}