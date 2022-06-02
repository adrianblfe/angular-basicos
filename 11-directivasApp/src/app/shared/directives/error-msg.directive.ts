import { ElementRef, SimpleChanges } from '@angular/core';
import { OnChanges } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

	private _color: string = 'red';
	private _mensaje: string = 'Este campo es requerido';

	htmlElement: ElementRef<HTMLElement>;

	@Input() set color( valor: string ) {
		this._color = valor;
		this.setColor();
	}
	
	@Input() set mensaje( valor: string ) {
		this._mensaje = valor;
		this.setMensaje();
	}

	@Input() set valido( valor: boolean ) {
		if ( valor ) {
			this.htmlElement.nativeElement.classList.add('hidden');
		} else {
			this.htmlElement.nativeElement.classList.remove('hidden');
		}
	}

	constructor( private el: ElementRef<HTMLElement> ) { 
		this.htmlElement = el;
  	}

	ngOnChanges(changes: SimpleChanges): void {
		// this.setMensaje();
		// this.setColor();
	}
	
	ngOnInit(): void {
		// console.log(this.color);			// undefined
		// console.log(this.mensaje);		// undefined
		
		this.setColor();
		this.setMensaje();
		this.setEstilo();
	}

	setEstilo(): void {
		this.htmlElement.nativeElement.classList.add('form-text');
	}

	setColor(): void {
		this.htmlElement.nativeElement.style.color = this._color;
	}

	setMensaje(): void {
		this.htmlElement.nativeElement.innerText = this._mensaje;
	}

}
