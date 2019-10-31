import { Component, OnInit } from '@angular/core';
import { ListingService } from 'src/app/services/listing.service';
import { NavController, MenuController } from '@ionic/angular';
import { User, Listing } from 'src/app/models';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-listings',
  templateUrl: 'listings.page.html',
  styleUrls: ['listings.page.scss'],
  animations: [
    trigger('flyInOutTop', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'middle',
        style({
          transform: 'translate3d(0, -50px, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(0, -101px, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in')),

      transition('out => middle', animate('200ms ease-out')),
      transition('middle => out', animate('200ms ease-out')),

      transition('in => middle', animate('200ms ease-out')),
      transition('middle => in', animate('200ms ease-out')),
    ])
  ]
})
export class ListingsPage implements OnInit {
  public user = new User();
  public listings: Array<Listing> = [];
  public displayListings: Array<Listing> = [];
  public rate = 3.5;
  public loading: boolean;

  public imgShow = 'in';
  public menuShow = 'in';
  public SearchShow = 'in;';
  public headerTitle = 'header-title-top';
  public headerImg = 'header-img-top';
  public search = 'search-top';
  public previosuScroll = 0;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private menuCtrl: MenuController
  ) {
    const userId = localStorage.getItem('userId');
    this.user.id = parseInt(userId);
    console.log(this.user.id);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.loading = true;
    this.menuCtrl.enable(true);

    const callback = (err, listings) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(listings);
      this.listings = listings;
      this.displayListings = listings;
      this.loading = false;
    };

    this.listingService.getListingsByProviderId(this.user.id, callback);
  }

  openCloseTabs(event) {
    if (event.detail.scrollTop < 100) {

      this.imgShow = 'in';
      this.headerTitle = 'header-title-top';
      this.headerImg = 'header-img-top';
      this.SearchShow = 'in';

    } else if (event.detail.scrollTop > 100 && this.imgShow === 'in'
      && event.detail.scrollTop > this.previosuScroll) {

      this.imgShow = 'out';
      this.headerImg = 'header-img';
      this.headerTitle = 'header-title';
      this.SearchShow = 'middle';

    } else if (event.detail.scrollTop > 100 &&
      event.detail.scrollTop > this.previosuScroll &&
      this.menuShow === 'in') {

      this.menuShow = 'middle';
      this.SearchShow = 'middle';

    } else if (
      event.detail.scrollTop > 100 &&
      event.detail.scrollTop < this.previosuScroll &&
      this.menuShow === 'middle') {

      this.imgShow = 'in';
      this.menuShow = 'in';
      this.SearchShow = 'in';

    } else if (event.detail.scrollTop > 322 && this.search === 'search-top') {

      this.search = 'search';

    } else if (event.detail.scrollTop < 322 && this.search === 'search') {

      this.search = 'search-top';

    }
    this.previosuScroll = event.detail.scrollTop;
  }

  onSearch(search) {
    this.displayListings = this.listings.filter((listing): Listing => {
      if (listing.name.includes(search.detail.value) || listing.location.includes(search.detail.value)) {
        return listing;
      }
    });
  }

  navToListingDetails(listing: Listing) {
    this.navCtrl.navigateForward('listing-details', {
      queryParams: {
        listingId: listing.id
      }
    });
  }

  navToAddListings() {
    this.navCtrl.navigateForward('add-edit-listing', {
      queryParams: {
        type: 'add'
      }
    });
  }
}
