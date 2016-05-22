import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app.component'
import { Type } from '@angular/core';
import { HTTP_PROVIDERS } from "@angular/http";

bootstrap(<Type>AppComponent, [
    HTTP_PROVIDERS
]);