import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  public newMessage;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  navBack() {
    this.navCtrl.navigateBack('tabs/inbox');
  }
  // TODO:
  sendMessage() {

  }

}
