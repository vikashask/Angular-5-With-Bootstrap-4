import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { EventService } from "./event.service";
import 'rxjs/add/operator/map';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {

    }
    resolve() {
        return this.eventService.getEvents();
        //  .map((event) => event);
    }
}
