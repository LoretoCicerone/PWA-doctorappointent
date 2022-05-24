import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-header-crud',
  templateUrl: './shared-header-crud.component.html',
  styleUrls: ['./shared-header-crud.component.scss']
})
export class SharedHeaderCrudComponent implements OnInit {

  @Input() title: string;
  @Input() addButtonText: string;
  @Output('add') addEmitter = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }


  public add(event){
    this.addEmitter.emit(event);
  }


}
