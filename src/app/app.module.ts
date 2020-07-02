import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {LocalNotifications} from '@ionic-native/local-notifications/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
let  firebaseConfig = {
  apiKey: "AIzaSyDYoJw3u39ds4krRbVZ9f44H-6I0FHI7qg",
  authDomain: "pizzy-5e2d8.firebaseapp.com",
  databaseURL: "https://pizzy-5e2d8.firebaseio.com",
  projectId: "pizzy-5e2d8",
  storageBucket: "",
  messagingSenderId: "997131188989",
  appId: "1:997131188989:web:6b0e838ef7144bb5d95c94"
}; 
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),AngularFireDatabaseModule,AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    LocalNotifications,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
