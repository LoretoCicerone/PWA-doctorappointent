import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IPrescription } from '../../model/IPrescription';

@Component({
  selector: 'app-prescription-form',
  templateUrl: './prescription-form.component.html',
  styleUrls: ['./prescription-form.component.scss']
})
export class PrescriptionFormComponent implements OnInit {

  precriptionForm: FormGroup;
  @Input()
  set currentPrescriptionRow(prescriptionRow: IPrescription) {
    this.precriptionForm = this.buildGeneralForm(prescriptionRow);
    this._prescritpionRow = prescriptionRow;
  }
  get currentPrescritpionRow(): IPrescription {
    return this._prescritpionRow;
  }

  private _prescritpionRow: IPrescription;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  buildGeneralForm(prescriptionRow: IPrescription) {
    return this.formBuilder.group({
      patient: new FormControl({ value: prescriptionRow.patient.name, disabled: true }),
      patient_email: new FormControl({value: prescriptionRow.patient.email, disabled:true}),
     //: new FormControl({ value: prescriptionRow.doctor.name, disabled: true }),
      pathology: new FormControl(prescriptionRow.pathology, Validators.required),
      symptoms: new FormControl(prescriptionRow.symptoms, Validators.required),
      medicine: new FormControl(prescriptionRow.medicicePrescripted, Validators.required),
      procedure: new FormControl(prescriptionRow.procedure, Validators.required),
      feedback: new FormControl(prescriptionRow.feedback, Validators.required)
    })
  }

}
