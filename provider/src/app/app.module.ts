// Angualr Modules:
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';

// Ionic Modules:
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

// Ionic Native Modules
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

// Main App Modules:
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Modal Page Module:
import { UploadPageModule } from './modals/upload/upload.module';

// Dependacies:
import { JwtHelperService } from '@auth0/angular-jwt';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    UploadPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
