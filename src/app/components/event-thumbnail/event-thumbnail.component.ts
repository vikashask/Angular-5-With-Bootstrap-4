import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from '../shared';

@Component({
  selector: 'app-event-thumbnail',
  template: `
  <div [routerLink]="['/events',event.id]" class="well hoverwell thumbnail">
  <h2>{{event?.name}}</h2>
  <div>Date: {{event?.date}}</div>
  <div [ngSwitch]="event?.time">
    Time: {{event?.time}}
    <span [ngClass]="{green:event?.time==='8:00 am',bold:event?.time==='8:00 am'}" *ngSwitchCase="'8:00 am'"> (Early Start)</span>
    <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
  </div>
  <div>Price: \${{event?.price}}</div>
  <div *ngIf="event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
  </div>
  <div *ngIf="event?.onlineUrl">
    Online URL: {{event?.onlineUrl}}
  </div>
</div>
  `,
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;
  constructor() { }

  ngOnInit() {
    // console.log(this.event[0].id);
    
  }

}
