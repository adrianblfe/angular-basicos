import { Input } from '@angular/core';
import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';


@Directive({
	selector: '[customMin][ngModel]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: CustomMinDiretive,
			multi: true
		}
	]
})
export class CustomMinDiretive implements Validator {

	@Input() minimo!: number;

	constructor() {}

	validate( control: FormControl ) {
		const inputValue = control.value;

		return inputValue < this.minimo ? { 'customMin': true } : null;
		
	}

}