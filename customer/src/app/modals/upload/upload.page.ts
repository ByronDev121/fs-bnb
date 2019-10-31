import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  @Input() user: User;
  @Input() that;
  image: any;
  uploadImage: any;

  constructor(
    private uploadService: UploadService,
    private modalCtrl: ModalController
  ) {

  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.createImageFromBlob(file);
      this.uploadImage = file;
    }
  }

  createImageFromBlob(image) {
    let reader = new FileReader();
    reader.addEventListener('load', () => {
      this.image = reader.result;
    }, false);
    if (image) {
      this.image = reader.readAsDataURL(image);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadImage);

    const userId = localStorage.getItem('userId');
    this.uploadService.uploadImage(userId, formData, (err, res) => {
      if (err) {
        alert(err);
      } else {
        this.user = res.user;
        this.onDismiss();
      }
    });
  }

  async onDismiss() {
    this.that.ngOnInit();
    await this.modalCtrl.dismiss();
  }

}
