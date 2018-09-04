import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Events, MenuController, Platform } from '@ionic/angular';
import * as firebase from 'Firebase';

import { UserData } from './providers/user-data';

const config = {
  apiKey: "AIzaSyDp_ehZtwVt_DoPXlz4meDO4bSxT-lSdpU",
  authDomain: 'mas-programming1.firebaseapp.com',
  databaseURL: 'https://mas-programming1.firebaseio.com',
  projectId: 'mas-programming1',
  storageBucket: 'mas-programming1.appspot.com',
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Schedule',
      url: '/app/tabs/(schedule:schedule)',
      icon: 'calendar'
    },
    {
      title: 'Speakers',
      url: '/app/tabs/(speakers:speakers)',
      icon: 'contacts'
    },
    { title: 'Map', url: '/app/tabs/(map:map)', icon: 'map' },
    {
      title: 'About',
      url: '/app/tabs/(about:about)',
      icon: 'information-circle'
    },
    {
      title: 'Bulletin',
      url: '/app/tabs/(bulletinPage:bulletinPage)',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;

  constructor(
    private events: Events,
    private menu: MenuController,
    private router: Router,
    private userData: UserData,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    firebase.initializeApp(config);
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    this.events.subscribe('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  selectTab(index: number, fallbackUrl: string) {
    const tabs = document.querySelector('ion-tabs');
    let promise: Promise<any> = null;
    if (tabs) {
      promise = tabs.componentOnReady();
      promise.then(() => {
        return tabs.select(index);
      });
    } else {
      promise = this.navigate(fallbackUrl);
    }
    return promise.then(() => {
      return this.menu.toggle();
    });
  }

  navigate(url: string) {
    return this.router.navigateByUrl(url);
  }

  logout() {
    this.userData.logout().then(() => {
      return this.navigate('/app/tabs/(schedule:schedule)');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.router.navigateByUrl('/tutorial');
  }
}
