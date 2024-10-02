import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovoitSanteComponent } from './covoit-sante.component';

describe('CovoitSanteComponent', () => {
  let component: CovoitSanteComponent;
  let fixture: ComponentFixture<CovoitSanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovoitSanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CovoitSanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
