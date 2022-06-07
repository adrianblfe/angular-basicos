import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

	@ViewChild('mapDiv') mapDivElement!: ElementRef;

	constructor( 
		private placesService: PlacesService,
		private mapService: MapService
	) { }

	ngAfterViewInit(): void {
		if (!this.placesService.userLocation) throw Error('No hay placesService.userLocation');

		const map = new Map({
			container: this.mapDivElement.nativeElement, // container ID
			style: 'mapbox://styles/mapbox/light-v10', // style URL
			center: this.placesService.userLocation, // starting position [lng, lat]
			zoom: 14 // starting zoom
		});

		const popup = new Popup()
			.setHTML(`
				<h6>Aquí estoy</h6>
				<span>Estoy en este lugar del mundo</span>
			`);

		new Marker({ color: 'red' })
			.setLngLat( this.placesService.userLocation )
			.setPopup( popup )
			.addTo( map );

		this.mapService.setMap( map );
	}

	
}
