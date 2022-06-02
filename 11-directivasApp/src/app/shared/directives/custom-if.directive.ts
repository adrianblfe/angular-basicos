import { Input, ViewContainerRef } from '@angular/core';
import { TemplateRef } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

	@Input() set customIf( condicion: boolean ) {
		if ( condicion ) {
			this.viewContainer.createEmbeddedView( this.templateRef );
		} else {
			this.viewContainer.clear();
		}
	}

	constructor(
		private templateRef: TemplateRef<HTMLElement>,
		private viewContainer: ViewContainerRef
	) {

	}

}
