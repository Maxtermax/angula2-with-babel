// Import polyfills.
import 'babel-polyfill';
import 'zone.js/dist/zone.js';

import { Component } from '@angular/core';
import { bootstrap }  from '@angular/platform-browser-dynamic';


@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})

class AppComponent { 
	constructor() {
		console.log("Test");
	}
}

bootstrap(AppComponent);