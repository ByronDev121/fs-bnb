import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
import { ChatService } from 'src/app/services/chat.service';
import { User, Chat } from '../../models';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  public chats: Array<Chat> = [];
  public user: User = new User();

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private chatService: ChatService,
  ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
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
      this.chats = chats.sort(this.sortByFollowUpDate);;
    }
  }

  getName(id) {
    this.userService.getUserById(id, (err, user) => {
      return user.firstName + user.lastName;
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    this.chatService.getByUserId(this.user.id, (err, chats) => {
      if (err) {
        alert(err.message);
      } else {
        this.chats = chats.sort(this.sortByFollowUpDate);
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
        chat: chat
      }
    });
  }

}
