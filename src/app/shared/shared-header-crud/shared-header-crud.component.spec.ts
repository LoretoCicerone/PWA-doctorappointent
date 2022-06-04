import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedHeaderCrudComponent } from './shared-header-crud.component';

describe('SharedHeaderCrudComponent', () => {
  let component: SharedHeaderCrudComponent;
  let fixture: ComponentFixture<SharedHeaderCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedHeaderCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedHeaderCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
