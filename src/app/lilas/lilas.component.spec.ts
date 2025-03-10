import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LilasComponent } from './lilas.component';

describe('LilasComponent', () => {
  let component: LilasComponent;
  let fixture: ComponentFixture<LilasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LilasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LilasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
