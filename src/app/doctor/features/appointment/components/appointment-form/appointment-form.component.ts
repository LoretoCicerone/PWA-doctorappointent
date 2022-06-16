import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IAppointment } from 'src/app/shared/model/IAppointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  @Input() isEditMode: boolean;
  appointmentForm: FormGroup;
  @Input() set currentAppointmentRow(appointmentRow: IAppointment) {
    this.appointmentForm = this.buildGeneralForm(appointmentRow);
    this._appointmentRow = appointmentRow;
  }
  get currentAppointmentRow() {
    return this._appointmentRow;
  }
  private _appointmentRow: IAppointment;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  buildGeneralForm(appointmentRow: IAppointment) {
    return new FormGroup({
      appointmentDate: new FormControl(appointmentRow.appointmentDate, Validators.required),
      startHour: new FormControl(appointmentRow.startHour, Validators.required),
      endHour: new FormControl(appointmentRow.endHour, Validators.required),
    },
    {
      validators : this.hoursValidator
    }
  )
  }

  hoursValidator: ValidatorFn = (formGroup: FormGroup) => {
    if (formGroup.get('startHour').value.hour > formGroup.get('endHour').value.hour) {
      return { wrongHours: true };
    }
    if (formGroup.get('startHour').value.hour === formGroup.get('endHour').value.hour && formGroup.get('startHour').value.minute >= formGroup.get('endHour').value.minute) {
      return { wrongHours: true };
    }
    return null;
  }

}
