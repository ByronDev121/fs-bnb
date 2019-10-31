import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { Listing } from '../../models/';
import { ListingService } from 'src/app/services/listing.service';

@Component({
  selector: 'app-add-edit-listing',
  templateUrl: './add-edit-listing.page.html',
  styleUrls: ['./add-edit-listing.page.scss'],
})
export class AddEditListingPage implements OnInit {

  public type: string;
  public listing: Listing;
  public newImages: Array<any> = [];

  constructor(
    private listingService: ListingService,
    private activatedRoute: ActivatedRoute,
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {
    this.listing = new Listing();
  }

  ngOnInit() {
    const navParamCallBack = (data: any) => {
      this.type = data.params.type;
      if (this.type === 'edit') {
        this.listing.id = data.params.listingId;
      } else {
        this.listing.providerId = parseInt(localStorage.getItem('userId'));
      }
    };
    this.activatedRoute.queryParamMap.subscribe(navParamCallBack);
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.newImages.push(file);
      this.createImageFromBlob(file);
    }
  }

  createImageFromBlob(image) {
    const reader = new FileReader();
    let img;
    reader.addEventListener('load', () => {
      img = reader.result;
      this.listing.imgUrl.push(img);
    }, false);
    if (image) {
      img = reader.readAsDataURL(image);
    }
  }

  clearImage(image) {
    this.listing.imgUrl = this.listing.imgUrl.filter(x => x !== image);
  }

  plus(val) {
    if (val === 'guests') {
      this.listing.guests++;
    } else if (val === 'beds') {
      this.listing.beds++;
    } else if (val === 'baths') {
      this.listing.baths++;
    }
  }

  minus(val) {
    if (val === 'guests' && this.listing.guests !== 0) {
      this.listing.guests--;
    } else if (val === 'beds' && this.listing.beds !== 0) {
      this.listing.beds--;
    } else if (val === 'baths' && this.listing.baths !== 0) {
      this.listing.baths--;
    }
  }

  save() {
    const images = this.listing.imgUrl;
    this.listing.imgUrl = [];
    this.listingService.createListing(this.listing, (err, res) => {
      if (err) {
        this.listing.imgUrl = images;
        this.presentAlert(err);
      } else {
        let error = false;
        this.newImages.forEach(img => {
          const formData = new FormData();
          formData.append('file', img);
          this.listingService.uploadListingImg(res.id, formData, (imgErr, imgRes) => {
            if (imgErr) {
              this.presentAlert(imgErr);
              error = true;
            }
          });
        });
        if (!error) {
          this.navCtrl.pop();
        }
      }
    });
  }

  edit() {
    // TODO: Edit listing;
  }

  navBack() {
    this.navCtrl.pop();
  }

  async presentAlertCheckbox() {
    const alert = await this.alertCtrl.create({
      header: 'Select amenities',
      inputs: [
        {
          type: 'checkbox',
          label: 'TV',
          value: 'TV'
        },
        {
          type: 'checkbox',
          label: 'Air conditioning',
          value: 'Air conditioning',
        },
        {
          type: 'checkbox',
          label: 'Wifi',
          value: 'Wifi'
        },
        {
          type: 'checkbox',
          label: 'Washer',
          value: 'Washer'
        },
        {
          type: 'checkbox',
          label: 'Dryer',
          value: 'Dryer'
        },
        {
          type: 'checkbox',
          label: 'Espresso machine',
          value: 'Espresso machine'
        },
        {
          type: 'checkbox',
          label: 'Heating',
          value: 'Heating'
        },
        {
          type: 'checkbox',
          label: 'Parking',
          value: 'Parking'
        },
        {
          type: 'checkbox',
          label: 'Pool',
          value: 'Pool'
        },
        {
          type: 'checkbox',
          label: 'Hot tub',
          value: 'Hot tub'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Ok',
          handler: (val) => {
            console.log(JSON.stringify(val));
            this.listing.amenities = JSON.stringify(val);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert(err) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Failed to create listing',
      message: err.message,
      buttons: ['OK']
    });

    await alert.present();
  }
}
