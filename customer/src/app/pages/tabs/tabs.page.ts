import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models';
import { Events } from '@ionic/angular';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  animations: [
    trigger('flyInOutBottom', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(0, 100%, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ]),
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
          transform: 'translate3d(0, -100%, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ])
  ]
})
export class TabsPage {

  public loggedInUser: User;
  public tabs = 'in';

  constructor(
    private userService: UserService,
    private events: Events
  ) {
    const userId = localStorage.getItem('userId');
    const cb = (err, res: User) => {
      if (err) {
        alert(err);
      } else {
        this.loggedInUser = res;
      }
    };

    this.userService.getUserById(userId, cb);

    this.events.subscribe('tabs:open-close', (openClose, time) => {
      // user and time are the same arguments passed in `events.publish(user, time)`

      if (openClose === 'show') {
        console.log(openClose);
        this.tabs = 'in';
      } else if (openClose === 'hide') {
        console.log(openClose);
        this.tabs = 'out';
      }
    });
  }


}
