import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileCardComponent } from './userprofile-card.component';

describe('UserprofileCardComponent', () => {
  let component: UserprofileCardComponent;
  let fixture: ComponentFixture<UserprofileCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserprofileCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserprofileCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
