import { getTodaysForecast, getFivedayForecast } from '../actions/get-forecast.actions';
import { createReducer, on, Action } from '@ngrx/store';

export interface WeatherState {
    weatherForecast?: string;
}

const initialState: WeatherState = {
  weatherForecast: undefined,
};

const weatherForecastReducer = createReducer(initialState,
    on(getTodaysForecast, (state) => (
        { ...state, weatherForecast: 'stuff' }
    )),
);

export function reducer(state: WeatherState | undefined, action: Action) {
    return weatherForecastReducer(state, action);
}

export const selectForecast = (state: WeatherState) => state.weatherForecast;
