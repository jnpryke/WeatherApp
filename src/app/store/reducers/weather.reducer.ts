import { getTodaysForecast, getFivedayForecast } from '../actions/get-forecast.actions';
import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/get-forecast.actions'

export interface WeatherState {
    weatherForecast?: string;
    weatherMainDescription?: string;
    weatherDescription?: string;
    weatherTemp?: number;
    weatherTempMin?: number;
    weatherTempMax?: number;
    weatherLocationName?: string;
}

const initialState: WeatherState = {
  weatherForecast: undefined,
  weatherMainDescription: undefined,
  weatherDescription: undefined,
  weatherTemp: undefined,
  weatherTempMin: undefined,
  weatherTempMax: undefined,
  weatherLocationName: undefined,
};

const weatherForecastReducer = createReducer(initialState,
    on(actions.getTodaysForecastSuccess, (state, payload ) => (
        { ...state, weatherForecast: 'stuff', weatherMainDescription: payload.weather.weather[0].main }
    )),
);

export function reducer(state: WeatherState | undefined, action: Action) {
    return weatherForecastReducer(state, action);
}

export const selectForecast = (state: WeatherState) => state.weatherForecast;
