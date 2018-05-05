import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-list',
  template: `
      <h1> Upcoming Event </h1>
      <hr/>
      <div class="row">
          <div *ngFor="let event of event" class="col-md-5">
              <app-event-thumbnail  [event]="event"></app-event-thumbnail>
           </div>
      </div>
  `,
})
export class EventListComponent implements OnInit {

  event: IEvent[];
  constructor(private eventService: EventService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.event = this._route.snapshot.data['event']
    // by subscribing a service
    // this.eventService.getEvents().subscribe(event => {
    //   this.event = event;
    // });

  }

}
