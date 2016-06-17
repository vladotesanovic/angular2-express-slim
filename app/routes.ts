import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Type } from '@angular/core';

import {ComponentResolver, SystemJsComponentResolver} from '@angular/core';
import {RuntimeCompiler} from '@angular/compiler';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: RouterConfig = [
    { path: '', component: <Type>HomeComponent, terminal: true },
    { path: 'about', component: <Type>AboutComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes), {
        provide: ComponentResolver,
        useFactory: (compiler) => new SystemJsComponentResolver(compiler),
        deps: [RuntimeCompiler]
    },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];
