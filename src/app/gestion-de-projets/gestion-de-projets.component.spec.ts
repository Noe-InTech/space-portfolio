import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDeProjetsComponent } from './gestion-de-projets.component';

describe('GestionDeProjetsComponent', () => {
  let component: GestionDeProjetsComponent;
  let fixture: ComponentFixture<GestionDeProjetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDeProjetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionDeProjetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
