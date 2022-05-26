import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
	selector: 'app-no-comunes',
	templateUrl: './no-comunes.component.html',
	styles: [
	]
})
export class NoComunesComponent {

	// i18nSelect
	nombre: string = 'Adrián';
	genero: string = 'masculino';
	invitacionMapa = {
		'masculino': 'invitarlo',
		'femenino': 'invitarla'
	};

	// i18nPlural
	clientes: string[] = ['Maria', 'Pedro', 'Hernando', 'Fernando', 'Eduardo'];
	clientesMapa = {
		'=0': 'no tenemos ningún cliente esperando',
		'=1': 'tenemos un cliente esperando',
		'other': 'tenemos # clientes esperando'
	}

	cambiarCliente() {
		this.nombre = 'Maria';
		this.genero = 'femenino';
	}

	borrarCliente() {
		this.clientes.pop();
	}

	// KeyValue Pipe
	persona = {
		nombre: 'Adrián',
		edad: 35,
		dirección: 'Ottawa, Canadá'
	}

	// Json Pipe
	heroes = [
		{
			nombre: 'Superman',
			vuela: true,
		},
		{
			nombre: 'Robin',
			vuela: false,
		},
		{
			nombre: 'Aquaman',
			vuela: false,
		}
	]

	// Async Pipe
	miObservable = interval(2000); // 0,1,2,3,4

	valorPromesa = new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve('Tenemos data de promesa');
		}, 3500);
	});

}
