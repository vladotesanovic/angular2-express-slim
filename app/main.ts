import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Type, provide } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { ROUTER_PROVIDERS } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component'

bootstrap(<Type>AppComponent, [
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: <Type>HashLocationStrategy})
]);