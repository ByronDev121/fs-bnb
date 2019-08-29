import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { AuthService } from '../../services/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public user: User = new User();
  public passwordType = 'password';
  public rememberUser: Boolean;


  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
  navBack() {
    this.navCtrl.navigateBack('login');
  }

  showPassword() {
    if (this.passwordType === 'password') {
      this.passwordType = 'text';
    } else if (this.passwordType === 'text') {
      this.passwordType = 'password';
    }
  }

  register() {

    const callback = (err, res) => {
      if (err) {
        alert(err.error.message);
        return;
      } else {
        this.navCtrl.navigateForward('main/tabs/explorer');
      }
    };

    this.authService.register(this.user, callback);
  }
}
