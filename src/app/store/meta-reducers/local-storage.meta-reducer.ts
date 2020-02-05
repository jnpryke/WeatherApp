import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';
import { LocalStorageService } from '../../services/local-storage.service';

export function storageMetaReducer<S, A extends Action =
  Action>(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService) {
  let onInit = true; // after load/refresh…
  return (reducer: ActionReducer<S, A>) => {
    return (state: S, action: A): S => {
      // get to the nextState.
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        console.log('primera vez');
        onInit = false;
        const savedState = storageService.getTemperatureUnitState();
        return merge(nextState, savedState);
        // return nextState;
      }

      // save the next state to the application storage.
      // const stateToSave = pick(nextState, saveKeys);
      // storageService.setSavedState(stateToSave, localStorageKey);
      console.log('segunda vez');
      return nextState;
    };
  };
}
