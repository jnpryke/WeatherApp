import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(
    private http: HttpClient
  ) { }

  async getCurrentDayWeather() {
    // const lat = await navigator.geolocation.getCurrentPosition(this.callBack);

    const stuff = await this.getCurrentPosition();
    // const { latitude, longitude } = coords;
    console.log(stuff.coords.latitude + ' ' + stuff.coords.longitude);

    // console.log('lat from function ' + lat);

    const response = await this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' + stuff.coords.latitude + '&lon=' + stuff.coords.longitude + '&APPID=b7c221fb8a2b47d36d40adcbcdbb671a')
      .toPromise();

    return response;
  }

  getFiveDayForecast(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=b7c221fb8a2b47d36d40adcbcdbb671a');
  }

  async callBack(e) {
    // console.log(e.latitude + ' ' + e.longitude)
    console.log(e.coords.latitude + ' ' + e.coords.longitude)
    return e.coords.latitude;
  }

  getCurrentPosition(options = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

}
