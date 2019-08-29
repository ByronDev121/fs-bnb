import { Component } from '@angular/core';
import { AlertController, NavController, Events } from '@ionic/angular';
import { BookingsService } from '../../../services';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-trips',
  templateUrl: 'trips.page.html',
  styleUrls: ['trips.page.scss'],
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
          transform: 'translate3d(0, -52%, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ])
  ]
})
export class TripsPage {

  public trips: Array<any> = [];
  public tabsShow = 'in';

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private bookingsService: BookingsService,
    private events: Events
  ) {
    const userId = parseInt(localStorage.getItem('userId'));
    this.bookingsService.getBookingsbyUserId(userId).then(bookings => {
      this.trips = bookings;
    }).catch(err => {
      this.presentAlert(err);
    });
  }
  openCloseTabs(event) {
    if (event.detail.scrollTop < 15 && this.tabsShow === 'out') {
      console.log(event);
      this.tabsShow = 'in';
      this.events.publish('tabs:open-close', 'show', Date.now());
    } else if (event.detail.scrollTop > 15 && this.tabsShow === 'in') {
      console.log(event);
      this.tabsShow = 'out';
      this.events.publish('tabs:open-close', 'hide', Date.now());
    }
  }
  navToExplore() {
    this.navCtrl.navigateForward('tabs/explorer');
  }
  openTripDetails(trip) {
    this.navCtrl.navigateForward('listing-details', {
      queryParams: {
        listingId: trip.listing.id,
        userId: parseInt(localStorage.getItem('userId'))
      }
    });
  }
  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert!',
      subHeader: 'Failed to fetch trips',
      message: err.error.msg,
      buttons: ['OK']
    });

    await alert.present();
  }
  formatDate(date: string) {
    return date.slice(0, 10);
  }
}

