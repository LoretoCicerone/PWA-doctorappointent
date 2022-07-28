import { Component, OnInit } from '@angular/core';
import { IPrescription } from '../model/IPrescription';
import { PrescriptionFacadeService } from '../prescription-facade.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss']
})
export class PrescriptionComponent implements OnInit {

  prescriptions$ = this.prescriptionFacade.prescriptions$;
  isLoadingTable$ = this.prescriptionFacade.isLoadingTable$;
  showForm$ = this.prescriptionFacade.showForm$;
  currentRowObject = this.prescriptionFacade.currentRowObject$;
  columns: { name: string, dataKey: string, position?: 'right' | 'left', display: string, isSortable: boolean }[];


  constructor(private prescriptionFacade : PrescriptionFacadeService) { }

  ngOnInit(): void {
    this.prescriptionFacade.loadPrescriptions();
    this.columns = [
    {dataKey:'patient',name:'doctor.patient', display:'table-cell', isSortable:true},
    {dataKey:'pathology',name:'doctor.pathology', display:'table-cell', isSortable:true},
    {dataKey:'symptoms',name:'doctor.sympthoms', display:'table-cell', isSortable:true},
    {dataKey:'medicicePrescripted',name:'doctor.medicine', display:'table-cell', isSortable:true},
    {dataKey:'procedure',name:'doctor.procedure', display:'table-cell', isSortable:true},
    {dataKey:'feedback',name:'Feedback', display:'table-cell', isSortable:true}]
  }

  setCurrentObject(prescription : IPrescription){
    this.prescriptionFacade.setCurrentObject(prescription);
  }

}
