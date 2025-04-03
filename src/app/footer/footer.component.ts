import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  ngOnInit(): void {
    const year = new Date().getFullYear();
    document.getElementById('year')!.textContent = year.toString();
  }
}
