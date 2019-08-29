import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Booking, Listing, Chat, TextMessage } from '../../models';
import { BookingsService, ListingService, ChatService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.page.html',
  styleUrls: ['./booknow.page.scss'],
})
export class BooknowPage implements OnInit {

  public listing: Listing = new Listing();
  public booking: Booking = new Booking();
  public chat: Chat = new Chat();
  public newMessage: TextMessage = new TextMessage();

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingsService,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    private alertCtrl: AlertController,
    private chatService: ChatService
  ) { }

  ngOnInit() {
    const listingsCallBack = (err, listing) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      this.listing = listing;
      this.chat.providerUserId = this.listing.providerId;
    };

    const callBack = (data: any) => {
      this.booking.listingId = data.params.listingID;
      this.booking.userId = data.params.userID;
      this.chat.userId = data.params.userID;
      this.listingService.getListingbyId(this.booking.listingId, listingsCallBack);
    };

    this.activatedRoute.queryParamMap.subscribe(callBack);
  }

  navBack() {
    this.navCtrl.navigateBack('listing-details', {
      queryParams: {
        listingId: this.booking.listingId,
        userId: this.booking.userId
      }
    });
  }

  book() {
    this.booking.status = 'pending';
    this.bookingService.createBooking(this.booking).then(res => {
      this.chat.messages.push(this.newMessage);
      this.chatService.createNewChat(this.chat, (chatErr, chatres) => {
        if (chatErr) {
          this.presentAlert(chatErr, null);
        }
        this.presentAlert(null, res);
        this.navCtrl.navigateForward('tabs/trips');
      });
    }).catch(err => {
      this.presentAlert(err, null);
    });
  }

  backtoListings() {
    this.navCtrl.navigateForward('listing-details');
  }

  async presentAlert(err, success) {
    let header;
    let msg;
    if (err == null) {
      header = 'Error';
      msg = err;
    } else {
      header = 'Sucess';
      msg = success;
    }
    const alert = await this.alertCtrl.create({
      header: header,
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
