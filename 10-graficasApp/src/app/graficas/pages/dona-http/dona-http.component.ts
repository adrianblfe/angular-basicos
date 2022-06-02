import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

	public doughnutChartLabels: Label[] = [
		// 'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
	];
	public doughnutChartData: MultiDataSet = [
		// [ 350, 450, 100, 50 ],
	];
	public doughnutChartType: ChartType = 'doughnut';
	public colors: Color[] = [
		{
			backgroundColor: [
				'#41CAF0',
				'#43FAF1',
				'#49E3B0',
				'#43FA89',
				'#41F052'
			]
		}
	]

	constructor( private graficasServices: GraficasService) { }

	ngOnInit(): void {
		this.graficasServices.getUsuariosRedesSocialesDonaData()
			.subscribe( ({ labels, values }) => {
				this.doughnutChartLabels = labels;
				this.doughnutChartData = values;
			});
	}

}
