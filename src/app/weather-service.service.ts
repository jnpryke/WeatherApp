import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(
    private http: HttpClient
  ) { }

  getCurrentDayWeather(): Observable<any> {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.callBack);
      }else {
        console.log('not available');
      }

      return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=41.2379434&lon=-85.8558686&APPID=b7c221fb8a2b47d36d40adcbcdbb671a');
    // return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b7c221fb8a2b47d36d40adcbcdbb671a');
  }

  getFiveDayForecast(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=b7c221fb8a2b47d36d40adcbcdbb671a');
  }

  callBack(e) {
    // console.log(e.latitude + ' ' + e.longitude)
    console.log(e.coords.latitude + ' ' + e.coords.longitude)
  }
}
