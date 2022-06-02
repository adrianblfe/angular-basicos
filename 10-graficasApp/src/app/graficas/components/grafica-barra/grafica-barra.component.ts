import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
	selector: 'app-grafica-barra',
	templateUrl: './grafica-barra.component.html',
	styles: [
	]
})
export class GraficaBarraComponent implements OnInit {

	@Input() horizontal: boolean = false;
	@Input() barChartData: ChartDataSets[] = [
		// { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A', backgroundColor: '#FF7DB1', hoverBackgroundColor: 'red' },
		// { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B', backgroundColor: '#E872DC', hoverBackgroundColor: 'red' },
		// { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series C', backgroundColor: '#E589FF', hoverBackgroundColor: 'red' },
	];
	@Input() barChartLabels: Label[] = [
		// '2020', '2021', '2022', '2023', '2024', '2025', '2026'
	];

	public barChartOptions: ChartOptions = {
		responsive: true,
	};
	public barChartType: ChartType = 'bar';
	public barChartLegend = true;


	constructor() { }

	ngOnInit(): void {
		if ( this.horizontal ) {
			this.barChartType = 'horizontalBar';
		}
	}

}
