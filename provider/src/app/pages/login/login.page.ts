import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('flyInOutLeft', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(-150%, 0, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-in')),
      transition('in => out', animate('200ms ease-out'))
    ]),
    trigger('flyInOutRight', [
      state(
        'in',
        style({
          transform: 'translate3d(0, 0, 0)'
        })
      ),
      state(
        'out',
        style({
          transform: 'translate3d(150%, 0, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ]),
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
          transform: 'translate3d(0, 150vw, 0)'
        })
      ),
      transition('out => in', animate('200ms ease-out')),
      transition('in => out', animate('200ms ease-in'))
    ])
  ]
})
export class LoginPage implements OnInit {

  public email: string;
  public password: string;
  public rememberUser: Boolean;
  public passwordType = 'password';

  public loginBtn = 'login-btn';

  fsAnime = false;
  bnbAnime = false;
  emailPasswordAnime = false;

  constructor(
    private router: Router,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private menuCtrl: MenuController
  ) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.fsAnime = true;
    setTimeout(() => {
      this.bnbAnime = true;
    }, 200);
    setTimeout(() => {
      this.emailPasswordAnime = true;
    }, 400);
  }

  showPassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else if (this.passwordType === 'text') {
      this.passwordType = 'password';
    }
  }

  login() {
    const authUser = {
      email: this.email,
      password: this.password
    };

    this.authService.login(authUser).then(res => {
      const jwt = localStorage.getItem('jwt');
      const userId = localStorage.getItem('userId');
      console.log(jwt, userId);
      this.fsAnime = false;
      setTimeout(() => {
        this.bnbAnime = false;
      }, 200);
      setTimeout(() => {
        this.emailPasswordAnime = false;
      }, 400);
      setTimeout(() => {
        this.router.navigateByUrl('listings');
      }, 600);
    }).catch(err => {
      this.presentAlert(err);
    });
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to login',
      message: err,
      buttons: ['OK']
    });

    await alert.present();
  }

  signUp() {
    this.router.dispose();
    this.router.initialNavigation();
    this.router.navigateByUrl('register');
  }

}
