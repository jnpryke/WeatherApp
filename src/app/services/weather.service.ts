import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiKey } from '../../environments/api_key';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(
    private http: HttpClient
  ) { }

  async getCurrentDayWeather() {
    const location = await this.getCurrentPosition();

    return await this.http.get(
      this.weatherUrl + '?lat=' + (location.coords.latitude + 10) +
      '&lon=' + (location.coords.longitude  + 10) + '&APPID=' + apiKey.key)
      .toPromise();
  }

  async getFiveDayForecast() {
    const location = await this.getCurrentPosition();

    return await this.http.get(
      this.weatherUrl + '?lat=' + (location.coords.latitude + 10) +
      '&lon=' + (location.coords.longitude  + 10) + '&APPID=' + apiKey.key)
      .toPromise();
  }

  getCurrentPosition(options = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  }

  getTempForecast() {
    return this.http.get<string>(
      this.weatherUrl + '?lat=' + (41.24 + 10) +
      '&lon=' + (-85.85 + 10) + '&APPID=' + apiKey.key);
  }
}
