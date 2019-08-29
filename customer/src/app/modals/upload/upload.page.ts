import { Component, OnInit, Input } from '@angular/core';
import { UploadService } from '../../services/upload.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  @Input() user: User;
  ngForm: FormGroup;

  fileAdded: Boolean = false;
  image: any;

  constructor(
    private uploadService: UploadService,
    private formBuilder: FormBuilder,
    private modalCtrl: ModalController
  ) {
    this.ngForm = this.formBuilder.group({
      avatar: ['']
    });
  }

  ngOnInit() {
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ngForm.get('avatar').setValue(file);
      this.createImageFromBlob(file);
    }
    this.fileAdded = true;
  }

  createImageFromBlob(image) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image = reader.result;
    }, false);
    if (image) {
      this.image = reader.readAsDataURL(image);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.ngForm.get('avatar').value);

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

  clearImage() {

  }

  async onDismiss() {
    await this.modalCtrl.dismiss();
  }

}
