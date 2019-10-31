import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { ProviderListingsComponent } from './components/provider-listings/provider-listings.component';
import { ListingBookingsComponent } from './components/listing-bookings/listing-bookings.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HomeComponent,
    UsersComponent,
    ServiceProvidersComponent,
    ProviderListingsComponent,
    ListingBookingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
