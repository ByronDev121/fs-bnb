import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { User } from '../../../models';
import { UserService, AuthService } from '../../../services';
import { ModalController } from '@ionic/angular';
import { UploadPage } from '../../../modals/upload/upload.page';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {

  public user: User = new User();

  public colDetail: number = 8;
  public colImg: number = 4;
  public imgClass: string = 'avatar';
  public backDropClass: string;
  public profileView: boolean = false;

  constructor(
    private userService: UserService,
    private modalController: ModalController,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private authService: AuthService
  ) {

    const userId = localStorage.getItem('userId');
    console.log(userId);

    const callback = (err, user) => {
      if (err) {
        alert(err.message);
        return;
      }

      console.log(user.firstName);
      this.user = user;
    };

    this.userService.getUserById(userId, callback);
  }

  userClicked() {
    this.imgClass = 'avatar-active';
    this.profileView = true;
    this.backDropClass = 'back-drop';
  }

  closeClicked() {
    this.imgClass = 'avatar';
    this.profileView = false;
    this.backDropClass = '';
  }

  logout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('login');
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Are you sure you want to log out ' + this.user.firstName + '?',
      message: err,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.logout();
          }
        }
      ]
    });

    await alert.present();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: UploadPage,
      componentProps: {
        user: this.user
      }
    });
    return await modal.present()
  }

}
