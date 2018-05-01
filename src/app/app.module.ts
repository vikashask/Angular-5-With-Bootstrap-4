import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventThumbnailComponent } from './components/event-thumbnail/event-thumbnail.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { NavComponent } from './nav/nav.component';
import { EventService } from './components/shared/event.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
