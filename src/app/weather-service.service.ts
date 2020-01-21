import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(
    private http: HttpClient
  ) { }

  async getCurrentDayWeather() {
    const location = await this.getCurrentPosition();

    const response = await this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' + location.coords.latitude +
      '&lon=' + location.coords.longitude + '&APPID=b7c221fb8a2b47d36d40adcbcdbb671a')
      .toPromise();

    return response;
  }

  async getFiveDayForecast() {
    const location = await this.getCurrentPosition();

    return this.http.get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=' + location.coords.latitude +
      '&lon=' + location.coords.longitude + '&APPID=b7c221fb8a2b47d36d40adcbcdbb671a')
      .toPromise();
  }

  getCurrentPosition(options = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }
}
