import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '
  	<div class="navbar is-white">
  		<div class="navbar-band">
  			<a class="navbar-item">
  				My logo goes here!
  			</a>
		</div>
	</div>
  '
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/