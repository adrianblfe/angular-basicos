import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'adrián';
  nombreUpper: string = 'ADRIÁN';
  nombreCompleto: string = 'adriÁN BlAnCO';

  fecha: Date = new Date(); // El día de hoy
}
