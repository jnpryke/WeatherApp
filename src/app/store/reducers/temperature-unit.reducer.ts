import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/get-temperature-unit.actions';

export interface TemperatureUnitState {
  tempUnit?: string;
}

const initialState: TemperatureUnitState = {
  tempUnit: '&#8451;',
};

const temperatureUnitReducer = createReducer(initialState,
    on(actions.getTemperature, (state, payload) => (
        {
          tempUnit: 'celsius',
        }
    )),
);

export function reducer(state: TemperatureUnitState | undefined, action: Action) {
    return temperatureUnitReducer(state, action);
}
