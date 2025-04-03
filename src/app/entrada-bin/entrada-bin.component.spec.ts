import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaBinComponent } from './entrada-bin.component';

describe('EntradaBinComponent', () => {
  let component: EntradaBinComponent;
  let fixture: ComponentFixture<EntradaBinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntradaBinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntradaBinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
