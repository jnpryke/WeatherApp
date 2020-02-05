import { createReducer, on, Action } from '@ngrx/store';
import * as actions from '../actions/get-temperature-unit.actions';

export interface TemperatureUnitState {
  tempUnit?: string;
}

const initialState: TemperatureUnitState = {
  tempUnit: undefined,
};

const temperatureUnitReducer = createReducer(initialState,
    on(actions.getTemperatureUnitSuccess, (state, payload) => (
        {
          tempUnit: 'stuff',
        }
    )),
);

export function reducer(state: TemperatureUnitState | undefined, action: Action) {
    return temperatureUnitReducer(state, action);
}
