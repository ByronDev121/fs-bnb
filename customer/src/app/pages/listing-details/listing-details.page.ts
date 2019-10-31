import { Component, OnInit } from '@angular/core';
import { User, Listing } from '../../models';
import { ListingService } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})

export class ListingDetailsPage implements OnInit {

  public listing: Listing = new Listing();
  public amenities: Array<string> = [];
  public user: User = new User();
  public showPhotos: boolean;
  public showAmenities: boolean;
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.loading = true;
    const navParamCallBack = (data: any) => {
      this.listing.id = data.params.listingId;
      this.user.id = data.params.userId;
    };
    this.activatedRoute.queryParamMap.subscribe(navParamCallBack);

    const listingsCallBack = (err, listing) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      this.listing = listing;
      this.amenities = JSON.parse(listing.amenities);
      this.loading = false;
    };
    this.listingService.getListingbyId(this.listing.id, listingsCallBack);
  }

  navBack() {
    this.navCtrl.pop();
  }

  navToBooking() {
    this.navCtrl.navigateForward('booknow', {
      queryParams: {
        listingId: this.listing.id,
        userId: this.user.id
      }
    });
  }

}
