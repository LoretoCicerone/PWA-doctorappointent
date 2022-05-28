import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IDoctor } from '../../model/IDoctor';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  doctorForm: FormGroup;

  @Input() 
  set currentDoctorRow(currentDoctorRow: IDoctor) {
    this._currentDoctorRow = currentDoctorRow;
  this.doctorForm = this.buildGeneralForm(currentDoctorRow);
  } 

  get currentDoctorRow() {
    return this._currentDoctorRow
  }

  private _currentDoctorRow: IDoctor;
  @Input() isEditMode: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  buildGeneralForm(doctorRow: IDoctor) {
    return this.formBuilder.group({
      name: new FormControl(doctorRow.name, Validators.required),
      email: new FormControl(doctorRow.email, Validators.required),
      phone_number: new FormControl(doctorRow.phone_number, Validators.required),
      address: new FormControl(doctorRow.address, Validators.required),
      department: new FormControl(doctorRow.department, Validators.required),
      education: new FormControl(doctorRow.education, Validators.required)
    })
  }

}
