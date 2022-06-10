import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IAppointment } from 'src/app/shared/model/IAppointment';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {

  @Input() isEditMode : boolean;
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
    return this.formBuilder.group({
      appointmentDate: new FormControl(appointmentRow.appointmentDate, Validators.required),
      appointmentTime: new FormControl(appointmentRow.appointmentTime, Validators.required),
      patientName: new FormControl(appointmentRow.patient.name, Validators.required),
      patientEmail: new FormControl(appointmentRow.patient.email, Validators.required)
    })
  }

}
