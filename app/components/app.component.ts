import {Component} from 'angular2/core';
@Component({
    selector: 'my-app',
    templateUrl: 'components/app.component.html',
    styleUrls: ['components/app.component.css']
})
export class AppComponent {
    name: string = "Angular 2 on Express";
}