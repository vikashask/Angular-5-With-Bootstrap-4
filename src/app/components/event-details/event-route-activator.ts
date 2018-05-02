import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
import { EventService } from "../shared/event.service";


@Injectable()
export class EventRouteActivator implements CanActivate {
    constructor(private _eventService: EventService,
        private _router: Router) {

    }
    canActivate(route: ActivatedRouteSnapshot) {
        const eventExist = !!this._eventService.getEvent(+route.params['id']);
        if (!eventExist) {
            this._router.navigate(['/404']);
        }
        return eventExist;
    }
}
