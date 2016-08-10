import { HTTP_PROVIDERS } from "@angular/http";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic([
    HTTP_PROVIDERS,
]).bootstrapModule(AppModule);
