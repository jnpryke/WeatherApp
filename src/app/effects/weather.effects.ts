import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherServiceService as WeatherService } from '../weather-service.service';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType('[Forecast] Load Forecast'),
    mergeMap(() => this.weatherService.getTempForecast()
      .pipe(
        map(weather => ({ type: '[Weather API] Weather Forecast Loaded Success', payload: weather })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }

}
