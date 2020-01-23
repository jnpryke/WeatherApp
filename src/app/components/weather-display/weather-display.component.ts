import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getTodaysForecast } from '../../store/actions/get-forecast.actions';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  weather$: Observable<any>;

  constructor(private store: Store<{ weatherForecast: any }>) {
      this.weather$ = store.pipe(select('weatherForecast'));
    }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    // this.weatherService.getCurrentDayWeather().then(data => {
    //   console.log(data);
    //   this.weather = data;
    // });
    console.log('dispatch');
    this.store.dispatch(getTodaysForecast());
  }

  convertToFarenheit(tempKelvin) {
    return Math.round(tempKelvin * (9 / 5) - 459.67);
  }
}
