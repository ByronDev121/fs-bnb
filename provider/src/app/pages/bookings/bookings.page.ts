import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { BookingService } from '../../services/booking.service';
import { Booking } from 'src/app/models';

@Component({
  selector: 'app-bookings',
  templateUrl: 'bookings.page.html',
  styleUrls: ['bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  public listingId: string;
  public bookings: Array<Booking> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    const navParamCallBack = (data: any) => {
      this.listingId = data.params.listingId;
      if (this.listingId) {
        this.bookingService.getBookingsbyListingId(this.listingId).then(res => {
          this.bookings = res;
        }).catch(err => {
          this.presentAlert('Error', err);
        });
      } else {
        this.bookingService.getAllBookings().then((res: any) => {
          this.bookings = res;
        }).catch(err => {
          this.presentAlert('Error', err);
        });
      }
    };
    this.activatedRoute.queryParamMap.subscribe(navParamCallBack);
  }

  navBack() {
    this.navCtrl.pop();
  }

  updateBooking(type, booking) {
    if (type === 'accept') {
      booking.status = 'accepted';
    } else {
      booking.status = 'rejected';
    }
    this.bookingService.updateBooking(booking).then((res: any) => {
      this.presentAlert('Sucess', res);
    }).catch(err => {
      this.presentAlert('Error', err);
    });
  }

  async presentAlert(type, err) {
    const alert = await this.alertCtrl.create({
      header: type,
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

}
