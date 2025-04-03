import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaDecComponent } from './entrada-dec.component';

describe('EntradaDecComponent', () => {
  let component: EntradaDecComponent;
  let fixture: ComponentFixture<EntradaDecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaDecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaDecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
