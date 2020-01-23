import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from '../../environments/api_key';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient
  ) { }

  async getCurrentDayWeather() {
    const location = await this.getCurrentPosition();

    return await this.http.get(
      'https://api.openweathermap.org/data/2.5/weather?lat=' + location.coords.latitude +
      '&lon=' + location.coords.longitude + '&APPID=' + apiKey)
      .toPromise();
  }

  async getFiveDayForecast() {
    const location = await this.getCurrentPosition();

    return await this.http.get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=' + location.coords.latitude +
      '&lon=' + location.coords.longitude + '&APPID=' + apiKey)
      .toPromise();
  }

  getCurrentPosition(options = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getTempForecast() {
    console.log('are you being called');
    return this.http.get(
      'https://api.openweathermap.org/data/2.5/forecast?lat=' + 41.2 +
      '&lon=' + -85.6 + '&APPID=' + apiKey);
  }
}
