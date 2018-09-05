import { Component, ViewEncapsulation } from '@angular/core';
import {Http, Headers} from '@angular/http'
import { PopoverController } from '@ionic/angular';
import { Storage } from '@ionic/storage'

import { PopoverPage } from '../about-popover/about-popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  styleUrls: ['./about.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutPage {
  conferenceDate = '2047-05-17';
  weatherData:any;
  constructor(public storage: Storage, public popoverCtrl: PopoverController, public http: Http) { 
    console.log("constructor");
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: PopoverPage,
      event
    });
    await popover.present();
  }


   ngOnInit() {
    console.log("view did load");
    // check local storage for existing
    this.storage.get('data').then((data:any)=>{
      if(data){ 
        this.weatherData = JSON.parse(data._body)['list'];
      }else{
        // fetch weather data from API
        this.fetchWeatherData().then((res:any)=>{
          this.weatherData = JSON.parse(res._body)['list'];
          this.storage.set('data', res);
        }).catch(err=>{});
      }
      console.log(this.weatherData);
    });
  }

  // function to get weather data from Openweathermap
  fetchWeatherData(){
    return new Promise((resolve, reject) => {
      const headerDict = {
        'Content-Type': 'application/json'
      };
      const headerObj = { headers: new Headers(headerDict) };
      const baseUrl = "https://api.openweathermap.org/data/2.5/forecast?id=5261457&APPID=78beec8b41e39c45061e10f22e0dc536" ;
      console.log(baseUrl);
      this.http.get(baseUrl, headerObj).subscribe(
        function(response){
          resolve(response);
        },
        function(error){
           reject(error);
        }
      );

    });
  }
}
