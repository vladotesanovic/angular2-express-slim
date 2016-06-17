import { bootstrap }    from '@angular/platform-browser-dynamic';
import { Type } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";
import { AppComponent } from './app.component'
import { APP_ROUTER_PROVIDERS } from "./routes";

bootstrap(<Type>AppComponent, [
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS
]);