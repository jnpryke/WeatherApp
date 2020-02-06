import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';
import { LocalStorageService } from '../../services/local-storage.service';

export function storageMetaReducer<S, A extends Action =
  Action>(saveKeys: string[], localStorageKey: string, storageService: LocalStorageService) {
  let onInit = true; // after load/refresh…
  return (reducer: ActionReducer<S, A>) => {
    return (state: S, action: A): S => {
      const nextState = reducer(state, action);
      // init the application state.
      if (onInit) {
        onInit = false;
        const savedState = storageService.getSavedState(localStorageKey);
        return merge(nextState, savedState);
      }
      const stateToSave = pick(nextState, saveKeys);
      storageService.setSavedState(localStorageKey, stateToSave);
      return nextState;
    };
  };
}
