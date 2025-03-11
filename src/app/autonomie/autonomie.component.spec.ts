import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutonomieComponent } from './autonomie.component';

describe('AutonomieComponent', () => {
  let component: AutonomieComponent;
  let fixture: ComponentFixture<AutonomieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutonomieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutonomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
