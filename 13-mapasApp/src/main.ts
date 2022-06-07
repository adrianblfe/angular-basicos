import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWJsYW5jbzg3IiwiYSI6ImNsM3ZvYjVjbjBidWkzZHFubHg4M2M5M3EifQ.z2M-5S0b20LYJC58d6Ba-g';

if (!navigator.geolocation) {
	alert('Navegador no soporta la Geolocalización');
	throw new Error('Navegador no soporta la Geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
