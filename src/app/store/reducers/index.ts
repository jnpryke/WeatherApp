import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromWeather from './weather.reducer';
import { EffectsModule } from '@ngrx/effects';

export interface State {
  weatherForecast: fromWeather.WeatherState;
}

export const reducers: ActionReducerMap<State> = {
  weatherForecast: fromWeather.reducer,
};

// console.log all actions
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
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



export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger]
  : [];
