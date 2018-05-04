
import { Routes } from '@angular/router';

// added barrel
import {
    CreateEventComponent,
    EventDetailsComponent,
    EventThumbnailComponent,
    EventListComponent,
} from './components/index';

// import { EventListComponent } from './components/event-list/event-list.component';
// import { EventDetailsComponent } from './components/event-details/event-details.component';
// import { CreateEventComponent } from './components/create-event/create-event.component';
import { Error404Component } from './components/shared/error/404.component';
import { EventRouteActivator } from './components/event-details/event-route-activator';
import { EventListResolver } from './components/shared/event-list-resolver.service';
import { UserModule } from './user/user.module';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventListComponent, resolve: { event: EventListResolver } },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: '404', component: Error404Component },
    { path: 'user', loadChildren: () => UserModule }
];
