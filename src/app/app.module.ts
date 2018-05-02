import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

// added barrel

import {
  CreateEventComponent,
  EventDetailsComponent,
  EventThumbnailComponent,
  EventListComponent,
} from './components/index';

import { HomeComponent } from './home/home.component';
// import { EventListComponent } from './components/event-list/event-list.component';
// import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
// import { EventDetailsComponent } from './components/event-details/event-details.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './components/shared/event.service';
import { appRoutes } from './routes';
// import { CreateEventComponent } from './components/create-event/create-event.component';
import { Error404Component } from './components/shared/error/404.component';
import { EventRouteActivator } from './components/event-details/event-route-activator';
import { EventListResolver } from './components/shared/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EventService, EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?')
  }
  return true;
}
