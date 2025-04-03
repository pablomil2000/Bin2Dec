import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-entrada-dec',
  templateUrl: './entrada-dec.component.html',
  styleUrls: ['./entrada-dec.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class EntradaDecComponent implements OnInit {
  decimal: number = 0;

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.sharedService.binario$.subscribe(binario => {
      if (binario) {
        this.decimal = parseInt(binario, 2);
      }
    });
  }
}
