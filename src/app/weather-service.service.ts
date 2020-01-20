import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrentDayWeather() {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b7c221fb8a2b47d36d40adcbcdbb671a');
  }

  getFiveDayForecast() {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=b7c221fb8a2b47d36d40adcbcdbb671a');
  }
}
