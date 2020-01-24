import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../../services/weather.service';
import * as actions from '../actions/get-forecast.actions';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType('[Forecast] Today'),
    mergeMap(() => this.weatherService.getTempForecast()
      .pipe(
        map(weather => actions.getTodaysForecastSuccess({ weather })),
        catchError(error => of(actions.getTodaysForecastFailure({ error })))
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }
}
