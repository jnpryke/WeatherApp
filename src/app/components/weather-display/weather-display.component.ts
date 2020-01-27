import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getTodaysForecast } from '../../store/actions/get-forecast.actions';
import * as fromRoot from '../../store/reducers/index';
import { WeatherState } from '../../store/reducers/weather.reducer';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.scss']
})
export class WeatherDisplayComponent implements OnInit {
  public weatherMainDescription$: Observable<string>;
  weatherDescription$: Observable<string>;
  weatherLocation$: Observable<string>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.weatherMainDescription$ = this.store.pipe(select(fromRoot.selectWeatherMainDescription));
    this.weatherDescription$ = this.store.pipe(select(fromRoot.selectWeatherDescription));
    this.weatherLocation$ = this.store.pipe(select(fromRoot.selectWeatherLocation));
  }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.store.dispatch(getTodaysForecast());
  }

  convertToFarenheit(tempKelvin) {
    return Math.round(tempKelvin * (9 / 5) - 459.67);
  }
}
