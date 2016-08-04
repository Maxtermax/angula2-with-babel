import { Component } from '@angular/core';
import { bootstrap }  from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
})

class AppComponent { 
	constructor() {
		console.log("Test 1");
	}
}

bootstrap(AppComponent);