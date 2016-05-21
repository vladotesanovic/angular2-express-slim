import {Component} from '@angular/core';
import { ApplicationConstants } from '../constants/ApplicationConstants';

@Component({
    selector: 'my-app',
    templateUrl:'app.component.html',
    styleUrls: [ApplicationConstants.BASE_TEMPLATE_PATH + 'components/app.component.css']
})
export class AppComponent {
    name: string = "Angular 2 on Express";
}
