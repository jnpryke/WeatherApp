import { createAction, props } from '@ngrx/store';

export const getTodaysForecast = createAction(
  '[Forecast] Today'
);

export const getTodaysForecastSuccess = createAction(
  '[Forecast] Today Success',
  props<{ weather: any }>()
);

export const getTodaysForecastFailure = createAction(
  '[Forecast] Today Failure',
  props<{ error: any }>()
);

export const getFivedayForecast = createAction(
  '[Forecast] 5-Day'
);

export const getRecomendedAttire = createAction(
  '[Attire] Today'
);

export const getRecomendedAttireSuccess = createAction(
  '[Attire] Today Yay!'
);

export const getRecomendedAttireFailure = createAction(
  '[Attire] Today Nay!'
);
