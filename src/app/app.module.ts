import { HotelService } from './shared/hotel.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {HotelDisplayComponent} from './hotel-display/hotel-display.component';
import {
  RouterModule, Routes
} from '@angular/router'
  ;
import {DataService} from "./shared/data.service";
import {EventsComponent} from './events/events.component';
import {HotelRatingsComponent} from './hotel-display/hotel-ratings/hotel-ratings.component';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {directiveDef} from "@angular/core/src/view";
import { StarRatingComponent } from './shared/star-rating/star-rating.component';

const routes: Routes = [
  {path: 'Home', component: AppComponent},
  {path: 'HotelDisplay/:id', component: HotelDisplayComponent},
  {path: 'Events', component: EventsComponent},
  {path: 'HotelListings', component: HotelListComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelListComponent,
    HotelDisplayComponent,
    EventsComponent,
    HotelRatingsComponent,
    StarRatingComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,

    RouterModule.forRoot(routes)
  ],
  exports:[
    StarRatingComponent
  ],
  providers: [DataService, HotelService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
