import { createAction } from '@ngrx/store';

export const getTodaysForecast = createAction(
  '[Forecast] Today'
);

export const getFivedayForecast = createAction(
    '[Forecast] 5-Day',
);
