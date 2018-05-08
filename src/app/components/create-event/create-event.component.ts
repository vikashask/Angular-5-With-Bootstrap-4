import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  isDirty = true;
  constructor(private _router: Router, private _eventService: EventService) { }

  ngOnInit() {
  }

  cancel() {
    this._router.navigate(['/events']);
  }
  saveEvent(newEventForm) {
    console.log(newEventForm);
    this._eventService.saveEvent(newEventForm);
    this.isDirty = false;
    this._router.navigate(['/events']);
  }
}
