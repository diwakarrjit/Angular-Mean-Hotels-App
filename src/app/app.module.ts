import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpModule} from "@angular/http";
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {HotelListComponent} from './hotel-list/hotel-list.component';
import {HotelDisplayComponent} from './hotel-display/hotel-display.component';
import { RouterModule, Routes } from '@angular/router';import {DataService} from "../../api/data.service";
import { EventsComponent } from './events/events.component';
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'AppComponent'},
  {path: 'Events', component: EventsComponent},
  {path: 'HotelDetail', component: HotelDisplayComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HotelListComponent,
    HotelDisplayComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
