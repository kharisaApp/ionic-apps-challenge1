import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Chat',
      url: '/chat',
      icon: 'Chat'
    },
    {
      title: 'Notifikasi',
      url: '/notifikasi',
      icon: 'Notifikasi'
    },
    {
      title: 'Keranjang',
      url: '/keranjang',
      icon: 'Keranjang'
    },
    {
      title: 'Tambah',
      url: '/tambah',
      icon: 'Tambah'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'Login'
    },

    


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
