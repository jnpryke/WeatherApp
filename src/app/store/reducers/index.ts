import {
  ActionReducer,
  ActionReducerMap,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWeather from './weather.reducer';
import * as fromTemperature from './temperature-unit.reducer';

export interface AppState {
  weatherForecast: fromWeather.WeatherState;
  tempUnit: fromTemperature.TemperatureUnitState;
}

export const reducers: ActionReducerMap<AppState> = {
  weatherForecast: fromWeather.reducer,
  tempUnit: fromTemperature.reducer
};

// console.log all actions
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];

export const selectFeatureWeather = (state: AppState) => state.weatherForecast;
export const selectFeatureTemperature = (state: AppState) => state.tempUnit;

export const selectWeatherMainDescription = createSelector(
  selectFeatureWeather,
  (state: fromWeather.WeatherState) => state.weatherMainDescription
);

export const selectWeatherDescription = createSelector(
  selectFeatureWeather,
  (state: fromWeather.WeatherState) => state.weatherDescription
);

export const selectWeatherTemp = createSelector(
  selectFeatureWeather,
  (state: fromWeather.WeatherState) => state.weatherTemp
);

export const selectWeatherTempMax = createSelector(
  selectFeatureWeather,
  (state: fromWeather.WeatherState) => state.weatherTempMax
);

export const selectWeatherTempMin = createSelector(
  selectFeatureWeather,
  (state: fromWeather.WeatherState) => state.weatherTempMin
);

export const selectWeatherLocation = createSelector(
  selectFeatureWeather,
  (state: fromWeather.WeatherState) => state.weatherLocationName
);

export const selectWeatherTemperatureUnit = createSelector(
  selectFeatureTemperature,
  (state: fromTemperature.TemperatureUnitState) => state.tempUnit
);
