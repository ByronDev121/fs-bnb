import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListingService } from '../../services/listing/listing.service';
import { Listing } from '../../models/listing/listing';

@Component({
  selector: 'app-provider-listings',
  templateUrl: './provider-listings.component.html',
  styleUrls: ['./provider-listings.component.css']
})
export class ProviderListingsComponent implements OnInit {

  public providerId: string;
  public listings: Array<Listing>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private listingService: ListingService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      this.providerId = data.params.providerId;
    });
    this.listingService.getByProviderId(this.providerId).then(res => {
      this.listings = res;
    }).catch(err => {
      alert(err);
    });
  }

  goToBookings(listingId) {
    this.router.navigate(['bookings', listingId]);
  }

}
