import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptivexComponent } from './optivex.component';

describe('OptivexComponent', () => {
  let component: OptivexComponent;
  let fixture: ComponentFixture<OptivexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptivexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptivexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
