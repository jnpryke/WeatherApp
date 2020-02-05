import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWeather from './weather.reducer';
import * as fromTemperature from './temperature-unit.reducer'
import { storageMetaReducer } from '../meta-reducers/local-storage.meta-reducer';

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

export const selectFeature = (state: AppState) => state.weatherForecast;

export const selectWeatherMainDescription = createSelector(
  selectFeature,
  (state: fromWeather.WeatherState) => state.weatherMainDescription
);

export const selectWeatherDescription = createSelector(
  selectFeature,
  (state: fromWeather.WeatherState) => state.weatherDescription
);

export const selectWeatherTemp = createSelector(
  selectFeature,
  (state: fromWeather.WeatherState) => state.weatherTemp
);

export const selectWeatherTempMax = createSelector(
  selectFeature,
  (state: fromWeather.WeatherState) => state.weatherTempMax
);

export const selectWeatherTempMin = createSelector(
  selectFeature,
  (state: fromWeather.WeatherState) => state.weatherTempMin
);

export const selectWeatherLocation = createSelector(
  selectFeature,
  (state: fromWeather.WeatherState) => state.weatherLocationName
);
