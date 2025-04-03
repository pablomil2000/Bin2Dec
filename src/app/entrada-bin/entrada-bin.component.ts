import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entrada-bin',
  templateUrl: './entrada-bin.component.html',
  styleUrls: ['./entrada-bin.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EntradaBinComponent {
  bin: string = "";
  error: string = "";

  constructor(private sharedService: SharedService) {}
  
  convertir() {
    // Limpiar espacios
    const binario = this.bin.trim();
    
    // Validar formato
    if (!/^[01]+$/g.test(binario)) {
      this.error = "El número binario está mal formado. Solo se permiten 0 y 1.";
      return;
    }
    
    // Validar longitud máxima (32 bits)
    if (binario.length > 8) {
      this.error = "El número binario es demasiado largo. Máximo 8 bits.";
      return;
    }
    
    // Validar que no empiece con 0 a menos que sea el único dígito
    if (binario.length > 1 && binario.startsWith('0')) {
      this.error = "El número binario no puede empezar con 0.";
      return;
    }
    
    // Si todo está correcto, emitir el valor
    this.error = "";
    this.sharedService.setBinario(binario);
  }
}
