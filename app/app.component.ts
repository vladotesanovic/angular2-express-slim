import { Component, Type } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component'
import { AboutComponent } from './components/about/about.component'

@Component({
    directives: [ROUTER_DIRECTIVES],
    providers: [Location],
    selector: 'my-app',
    styles: [`h1 {
	color: white;
	background: darkgray;
	padding: 20px;
}
.router-link-active { font-weight: bold }`],
    template: `
<h1>My First {{name}} app</h1>
<router-outlet></router-outlet>

<a [routerLink]="['/']">Home</a> | <a [routerLink]="['/about']">About</a>`,
})
@Routes([
    { component: <Type>HomeComponent, path: "/" },
    { component: <Type>AboutComponent, path: "/about" } 
])
export class AppComponent {
    name: string = "Angular 2 on Express";

    constructor(private router: Router) {}
}