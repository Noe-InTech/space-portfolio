import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GwadafoodComponent } from './gwadafood.component';

describe('GwadafoodComponent', () => {
  let component: GwadafoodComponent;
  let fixture: ComponentFixture<GwadafoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GwadafoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GwadafoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
