import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getTodaysForecast } from '../../store/actions/get-forecast.actions';
import * as fromRoot from '../../store/reducers/index';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  weather$: Observable<any>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.weather$ = this.store.pipe(select(fromRoot.selectFeatureWeather));
  }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    console.log('dispatch');
    this.store.dispatch(getTodaysForecast());
  }

  convertToFarenheit(tempKelvin) {
    return Math.round(tempKelvin * (9 / 5) - 459.67);
  }
}
