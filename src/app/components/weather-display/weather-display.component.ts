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
  weatherMainDescription$: Observable<string>;
  weatherDescription$: Observable<string>;
  weatherTemp$: Observable<number>;
  weatherTempMin$: Observable<number>;
  weatherTempMax$: Observable<number>;
  weatherLocation$: Observable<string>;

  constructor(private store: Store<fromRoot.AppState>) {
    this.weatherMainDescription$ = this.store.pipe(select(fromRoot.selectWeatherMainDescription));
    this.weatherDescription$ = this.store.pipe(select(fromRoot.selectWeatherDescription));
    this.weatherTemp$ = this.store.pipe(select(fromRoot.selectWeatherTemp));
    this.weatherTempMin$ = this.store.pipe(select(fromRoot.selectWeatherTempMin));
    this.weatherTempMax$ = this.store.pipe(select(fromRoot.selectWeatherTempMax));
    this.weatherLocation$ = this.store.pipe(select(fromRoot.selectWeatherLocation));
  }

  ngOnInit() {
    this.getWeatherData();
  }

  getWeatherData() {
    this.store.dispatch(getTodaysForecast());
  }
}
