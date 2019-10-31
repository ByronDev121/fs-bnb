import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent, NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../../services';
import { User, Chat, TextMessage } from '../../models';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  @ViewChild('scrollElement') content: IonContent;

  public user: User = new User();
  public chat: Chat = new Chat();
  public newMessage: TextMessage = new TextMessage();
  public poleMessages: any;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {

  }

  ionViewDidEnter() {
    this.poleMessages = setInterval(() => {
      this.doRefresh();
    }, 2000);
  }

  ionViewDidLeave() {
    clearInterval(this.poleMessages);
  }

  ngOnInit() {
    const chatCb = (err, res) => {
      if (err) {
        alert(err);
      } else {
        this.chat = res;
        setTimeout(() => {
          this.content.scrollToBottom(500);
        }, 100);
      }
    };
    const paramCb = (data: any) => {
      this.user.id = parseInt(data.params.userId);
      this.chat.id = parseInt(data.params.chatId);
      this.newMessage.chatId = this.chat.id;
      this.newMessage.senderId = this.user.id;
      this.chatService.getByChatId(this.chat.id, chatCb);
    };
    this.route.queryParamMap.subscribe(paramCb);
  }

  doRefresh() {
    this.chatService.getByChatId(this.chat.id, (err, chat) => {
      if (err) {
        alert(err.message);
      } else {
        if (chat) {
          this.chat.messages = chat.messages;
          setTimeout(() => {
            this.content.scrollToBottom(250);
          }, 100);
        }
      }
    });
  }

  isUserText(id) {
    id = parseInt(id);
    if (this.chat.userId === id) {
      return true;
    } else if (this.chat.providerId === id) {
      return false;
    }
  }

  sendMessage() {
    const callback = (err, res) => {
      if (err) {
        alert(err);
      } else {
        this.chat.messages.push(this.newMessage);
        this.newMessage.text = '';
        setTimeout(() => {
          this.content.scrollToBottom(250);
        }, 100);
      }
    };
    this.chatService.sendMessage(this.newMessage, callback);
  }

  navBack() {
    this.navCtrl.navigateBack('tabs/inbox');
  }

}
