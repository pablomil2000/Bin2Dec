import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntradaBinComponent } from '../entrada-bin/entrada-bin.component';
import { EntradaDecComponent } from '../entrada-dec/entrada-dec.component';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
  standalone: true,
  imports: [CommonModule, EntradaBinComponent, EntradaDecComponent]
})
export class ConversorComponent {
  constructor() {}
}
