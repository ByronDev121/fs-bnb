import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ChatService, UserService } from 'src/app/services';
import { User, Chat } from '../../models';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  public chats: Array<Chat> = [];
  public user: User = new User();
  public loading: boolean;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private chatService: ChatService,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.loading = true;
    this.user.id = parseInt(localStorage.getItem('userId'));
    this.userService.getUserById(this.user.id, this.userCallBack);
    this.chatService.getByUserId(this.user.id, this.chatCallBack);
  }

  userCallBack = (err, user) => {
    if (err) {
      alert(err.message);
      return;
    } else {
      this.user = user;
    }
  }

  chatCallBack = (err, chats) => {
    if (err) {
      alert(err.message);
      return;
    } else {
      if (chats) {
        this.chats = chats.sort(this.sortByFollowUpDate);
      }
    }
    this.loading = false;
  }

  doRefresh(event) {
    this.chatService.getByUserId(this.user.id, (err, chats) => {
      if (err) {
        alert(err.message);
      } else {
        if (chats) {
          this.chats = chats.sort(this.sortByFollowUpDate);
        }
        event.target.complete();
      }
    });
  }

  sortByFollowUpDate = (a, b) => {

    const followUpDateA = new Date(a.followUpDate);
    const followUpDateB = new Date(b.followUpDate);

    let comparison = 0;
    if (followUpDateA > followUpDateB) {
      comparison = 1;
    } else if (followUpDateA < followUpDateB) {
      comparison = -1;
    }
    return comparison;
  }

  openChat(chat) {
    this.navCtrl.navigateForward('chat', {
      queryParams: {
        userId: this.user.id,
        chatId: chat.id
      }
    });
  }

}
