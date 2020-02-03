import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/get-forecast.actions';

export interface WeatherState {
    weatherForecast?: string;
    weatherMainDescription?: string;
    weatherDescription?: string;
    weatherTemp?: number;
    weatherTempMin?: number;
    weatherTempMax?: number;
    weatherLocationName?: string;
    weatherAttire?: string;
}

const initialState: WeatherState = {
    weatherForecast: undefined,
    weatherMainDescription: undefined,
    weatherDescription: undefined,
    weatherTemp: undefined,
    weatherTempMin: undefined,
    weatherTempMax: undefined,
    weatherLocationName: undefined,
    weatherAttire: undefined,
};

const weatherForecastReducer = createReducer(initialState,
    on(actions.getTodaysForecastSuccess, (state, payload) => (
        {
            weatherForecast: 'stuff',
            weatherMainDescription: payload.weather.weather[0].main,
            weatherDescription: payload.weather.weather[0].description,
            weatherTemp: payload.weather.main.temp,
            weatherTempMin: payload.weather.main.temp_min,
            weatherTempMax: payload.weather.main.temp_max,
            weatherLocationName: payload.weather.name,
            weatherAttire: "COAT",
        }
    )),
);

export function reducer(state: WeatherState | undefined, action: Action) {
    return weatherForecastReducer(state, action);
}