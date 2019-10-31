import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../services/booking/booking.service';
import { Booking } from '../../models/booking/booking';

@Component({
  selector: 'app-listing-bookings',
  templateUrl: './listing-bookings.component.html',
  styleUrls: ['./listing-bookings.component.css']
})
export class ListingBookingsComponent implements OnInit {

  listingId: string;
  bookings: Array<Booking> = [];

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((data: any) => {
      this.listingId = data.params.listingId;
    });
    this.bookingService.getByListingId(this.listingId).then(bookings => {
      this.bookings = bookings;
    }).catch(err => {
      alert(err);
    });
  }

}
