import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../model/IDoctor';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  doctors : IDoctor[]=[{
    id:'1',address:'via',department:'dipartimento',education:'ed',email:'email@email',name:'name',phone_number:'2456887653'
  },
  {
    id:'2',address:'via dal',department:'departe',education:'a ed',email:'loretoemail',name:'Loreto',phone_number:'568634643'
  }]
  columns: { name: string, dataKey: string, position?: 'right'|'left', display:string, isSortable:boolean }[];
  constructor() { }

  ngOnInit(): void {
    this.columns = [
      {dataKey:'name',name:'Nome', display:'table-cell', isSortable:true},
      {dataKey:'email',name:'Email',display:'table-cell',isSortable:true},
      {dataKey:'phone_number',name:'Numero di telefono', display:'table-cell', isSortable:true},
      {dataKey:'address',name:'Indirizzo', display:'table-cell',  isSortable:true},
      {dataKey:'department',name:'Dipartimento', display:'table-cell', isSortable:true},
      {dataKey:'education',name:'Titolo di studio', display:'table-cell',  isSortable:true},
    ]
  }

}
