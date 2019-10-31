import { Component, OnInit } from '@angular/core';
import { NavController, Events, LoadingController } from '@ionic/angular';
import { User, Chat } from '../../../models';
import { UserService, ChatService } from 'src/app/services';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
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
          transform: 'translate3d(0, -50%, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ])
  ]
})

export class InboxPage {

  public chats: Array<Chat> = [];
  public user: User = new User();
  public tabsShow = 'in';
  public loading: boolean;

  constructor(
    private navCtrl: NavController,
    private userService: UserService,
    private chatService: ChatService,
    private events: Events,
    private loadingCtrl: LoadingController
  ) {
  }

  ionViewDidEnter() {
    this.loading = true;
    this.user.id = parseInt(localStorage.getItem('userId'));
    this.userService.getUserById(this.user.id, this.userCallBack);
    this.chatService.getByUserId(this.user.id, this.chatCallBack);
  }

  openCloseTabs(event) {
    if (event.detail.scrollTop < 45 && this.tabsShow === 'out') {
      console.log(event);
      this.tabsShow = 'in';
      this.events.publish('tabs:open-close', 'show', Date.now());
    } else if (event.detail.scrollTop > 45 && this.tabsShow === 'in') {
      console.log(event);
      this.tabsShow = 'out';
      this.events.publish('tabs:open-close', 'hide', Date.now());
    }
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
        this.loading = false;
      }
    }
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
