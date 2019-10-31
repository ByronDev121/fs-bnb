import { Component } from '@angular/core';
import { User, Listing } from '../../../models';
import { NavController, Events } from '@ionic/angular';
import { UserService, ListingService } from '../../../services';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-explorer',
  templateUrl: 'explorer.page.html',
  styleUrls: ['explorer.page.scss'],
  animations: [
    trigger('flyInOutTop', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(0, -95px, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ])
  ]
})
export class ExplorerPage {

  public user = new User();
  public listings: Array<Listing> = [];
  public displayListings: Array<Listing> = [];
  public rate: number = 3.5;

  public tabsShow = 'in';
  public search = 'search-top';
  public loading: boolean;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private listingService: ListingService,
    private events: Events

  ) {
    this.loading = true;
    const userId = localStorage.getItem('userId');
    this.user.id = parseInt(userId);
    console.log(this.user.id);

    const callback = (err, listings) => {
      if (err) {
        alert(err.error.message);

      } else {
        console.log(listings);
        this.listings = listings;
        this.displayListings = listings;
      }
      this.loading = false;
    };

    this.listingService.getAllListings(callback);

    const userCallback = (err, user) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      this.user = user;
    };
    this.userService.getUserById(this.user.id, userCallback);
  }

  openCloseTabs(event) {
    if (event.detail.scrollTop < 100 && this.tabsShow === 'out') {
      console.log(event);
      this.tabsShow = 'in';
      this.events.publish('tabs:open-close', 'show', Date.now());
    } else if (event.detail.scrollTop > 100 && this.tabsShow === 'in') {
      console.log(event);
      this.tabsShow = 'out';
      this.events.publish('tabs:open-close', 'hide', Date.now());
    } else if (event.detail.scrollTop > 322 && this.search === 'search-top') {
      console.log(event);
      this.search = 'search';
    } else if (event.detail.scrollTop < 322 && this.search === 'search') {
      console.log(event);
      this.search = 'search-top';
    }
  }

  onSearch(search) {
    this.displayListings = this.listings.filter((listing): Listing => {
      if (listing.name.includes(search.detail.value) || listing.location.includes(search.detail.value)) {
        return listing;
      }
    });
    console.log(this.displayListings);
  }

  navToListingDetails(listing: Listing) {
    this.navCtrl.navigateForward('listing-details', {
      queryParams: {
        listingId: listing.id,
        userId: this.user.id
      }
    });
  }
}

