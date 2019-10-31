import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Booking, Listing, Chat, TextMessage, User } from '../../models';
import { BookingsService, ListingService, ChatService, UserService } from '../../services';

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
  public host: User;
  public loading: boolean;

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingsService,
    private activatedRoute: ActivatedRoute,
    private listingService: ListingService,
    private alertCtrl: AlertController,
    private chatService: ChatService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.loading = true;
    const userCallback = (err, user) => {
      if (err) {
        alert(err.error.message);
      } else {
        this.host = user;
      }
      this.loading = false;
    };

    const listingsCallBack = (err, listing) => {
      if (err) {
        alert(err.error.message);
        this.loading = false;
      } else {
        this.listing = listing;
        this.chat.providerId = this.listing.providerId;
        this.userService.getUserById(this.listing.providerId, userCallback);
      }

    };

    const callBack = (data: any) => {
      this.booking.listingId = data.params.listingId;
      const userId = parseInt(data.params.userId);
      this.booking.userId = userId;
      this.chat.userId = userId;
      this.newMessage.senderId = userId;
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
    this.chat.messages.push(this.newMessage);
    this.bookingService.createBooking(this.booking).then(res => {
      this.chatService.create(this.chat, (chatErr, chatRes) => {
        if (chatErr) {
          this.presentAlert(chatErr, null);
        } else {
          this.presentAlert(null, res);
          this.navCtrl.navigateForward('tabs/trips');
        }
      });
    }).catch(err => {
      this.presentAlert(err, null);
    });
  }

  async presentAlert(err, success) {
    let title;
    let msg;
    if (err !== null) {
      title = 'Error';
      // msg = err;
    } else {
      title = 'Sucess';
      // msg = success;
    }
    const alert = await this.alertCtrl.create({
      header: title,
      buttons: ['OK']
    });

    await alert.present();
  }

}
