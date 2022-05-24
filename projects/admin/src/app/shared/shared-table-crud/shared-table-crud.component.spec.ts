import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedTableCrudComponent } from './shared-table-crud.component';

describe('SharedTableCrudComponent', () => {
  let component: SharedTableCrudComponent;
  let fixture: ComponentFixture<SharedTableCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedTableCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedTableCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
