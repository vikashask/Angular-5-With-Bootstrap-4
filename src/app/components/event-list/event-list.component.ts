import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

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

  event: any[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.event = this.eventService.getEvents();

  }

}
