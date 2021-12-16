import {Component} from "@angular/core"

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})

export class AppComponent {

    constructor() {
        console.debug("app started")
    }

    title = $localize`:App title at start|:Заголовок`;
}