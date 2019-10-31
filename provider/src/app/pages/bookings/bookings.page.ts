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

  public listingName: string;
  public listingId: string;
  public bookings: Array<Booking> = [];
  public loading: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private bookingService: BookingService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.loading = true;
    const navParamCallBack = (data: any) => {
      this.listingName = data.params.listingName;
      this.listingId = data.params.listingId;
      if (this.listingId) {
        this.bookingService.getBookingsbyListingId(this.listingId).then(res => {
          this.bookings = res;
          this.loading = false;
        }).catch(err => {
          this.presentAlert('Error', err);
          this.loading = false;
        });
      } else {
        this.bookingService.getAllBookings().then((res: any) => {
          this.bookings = res;
          this.loading = false;
        }).catch(err => {
          this.presentAlert('Error', err);
          this.loading = false;
        });
      }
    };
    this.activatedRoute.queryParamMap.subscribe(navParamCallBack);
  }

  navBack() {
    this.navCtrl.pop();
  }

  updateBooking(status, booking) {
    booking.status = status;
    this.bookingService.updateBooking(booking).then((res: any) => {
      this.ngOnInit();
      this.presentAlert('Sucess', res);
    }).catch(err => {
      this.presentAlert('Error', err);
    });
  }

  async presentAlert(type, msg) {
    const alert = await this.alertCtrl.create({
      header: type,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
