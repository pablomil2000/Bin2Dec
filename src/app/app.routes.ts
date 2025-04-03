import { Routes } from '@angular/router';
import { ConversorComponent } from './conversor/conversor.component';

export const routes: Routes = [
  { path: '', component: ConversorComponent },
  { path: 'conversor', component: ConversorComponent }
];
