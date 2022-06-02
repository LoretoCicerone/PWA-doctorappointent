import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IPrescription } from '../../model/IPrescription';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss']
})
export class PrescriptionListComponent implements OnInit {

  @Input() tableColumns;
  @Input() tableContent : any;
  @Output() rowSelectEmitter : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onRowSelect(row : IPrescription){
    this.rowSelectEmitter.emit(row);   
  }

}
