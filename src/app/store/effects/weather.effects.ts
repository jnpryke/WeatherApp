import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { WeatherService } from '../../weather.service';

@Injectable()
export class WeatherEffects {

  loadWeather$ = createEffect(() => this.actions$.pipe(
    ofType('[Forecast] Today'),
    mergeMap(() => this.weatherService.getTempForecast()
      .pipe(
        map(weather => ({ type: '[Forecast] Weather Forecast Loaded Success', payload: weather })),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService
  ) { }
}
