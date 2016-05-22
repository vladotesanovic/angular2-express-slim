import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
    selector: 'my-app',
    templateUrl: 'components/app.component.html',
    styleUrls: ['components/app.component.css']
})
export class AppComponent {
    name: string = "Angular 2 on Express";
    users: {};

    constructor(http: Http) {
        this.users = http.get("/users").map(data => data.json());
    }
}