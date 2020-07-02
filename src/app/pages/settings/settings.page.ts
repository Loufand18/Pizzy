import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  public appPages = [
    {
      title: 'Acceuil',
      url: '/settings/home',
      icon: 'home'
    },
    {
      title: 'Aide',
      url: '/settings/aide',
      icon: 'help-circle-outline'
    },
    {
      title: 'Deconnexion',
      icon: 'log-out',
      url: '/settings/aceuil'
    }
    
  ];

  constructor(

    private router:Router
  ) {
  
  }

  goAceuil(){
    this.router.navigate(['home']);
  }
  ngOnInit() {
  }
}
