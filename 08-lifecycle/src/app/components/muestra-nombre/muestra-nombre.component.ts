import { OnChanges, SimpleChanges } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-muestra-nombre',
  templateUrl: './muestra-nombre.component.html',
  styles: [
  ]
})
export class MuestraNombreComponent implements OnInit, OnChanges {

	@Input() nombre!: string;

	constructor() { }

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes);
	}

	ngOnInit(): void {
	}

}
