import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExplorerPage } from './explorer.page';
import { IonicRatingModule } from 'ionic4-rating';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ExplorerPage }]),
    IonicRatingModule
  ],
  declarations: [ExplorerPage]
})
export class ExplorerPageModule {}
