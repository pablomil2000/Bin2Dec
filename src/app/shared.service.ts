import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private binarioSubject = new BehaviorSubject<string>('');
  binario$ = this.binarioSubject.asObservable();

  setBinario(binario: string) {
    this.binarioSubject.next(binario);
  }
}
