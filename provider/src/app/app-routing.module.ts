import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'listings', loadChildren: './pages/listings/listings.module#ListingsPageModule' },
  { path: 'bookings', loadChildren: './pages/bookings/bookings.module#BookingsPageModule' },
  { path: 'inbox', loadChildren: './pages/inbox/inbox.module#InboxPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'listing-details', loadChildren: './pages/listing-details/listing-details.module#ListingDetailsPageModule' },
  { path: 'add-edit-listing', loadChildren: './pages/add-edit-listing/add-edit-listing.module#AddEditListingPageModule' },
  { path: 'chat', loadChildren: './pages/chat/chat.module#ChatPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
