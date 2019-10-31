import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ServiceProvidersComponent } from './components/service-providers/service-providers.component';
import { ProviderListingsComponent } from './components/provider-listings/provider-listings.component';
import { ListingBookingsComponent } from './components/listing-bookings/listing-bookings.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'service-providers', component: ServiceProvidersComponent },
  { path: 'listings/:providerId', component: ProviderListingsComponent },
  { path: 'bookings/:listingId', component: ListingBookingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
