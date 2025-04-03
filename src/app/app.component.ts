import { Component } from '@angular/core';
import { EntradaBinComponent } from "./entrada-bin/entrada-bin.component";
import { EntradaDecComponent } from "./entrada-dec/entrada-dec.component";
import { TitleComponent } from "./title/title.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [EntradaBinComponent, EntradaDecComponent, TitleComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Bin2Dec';
}
