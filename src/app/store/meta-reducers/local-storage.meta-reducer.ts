import {ActionReducer, Action} from '@ngrx/store';
import {merge, pick} from 'lodash-es';

// function setSavedState(state: any, localStorageKey: string) {
//   localStorage.setItem(localStorageKey, JSON.stringify(state));
// }

// function getSavedState(localStorageKey: string): any {
//   return JSON.parse(localStorage.getItem(localStorageKey));
// }

// the keys from state which we'd like to save.
// const stateKeys = ['layout.theme'];
// // the key for the local storage.
// const localStorageKey = '__app_storage__';

export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
  let onInit = true; // after load/refresh…
  return (state: S, action: A): S => {
    // reduce the nextState.
    const nextState = reducer(state, action);
    // init the application state.
    if (onInit) {
      console.log('meta reducer ');
      onInit = false;
      // const savedState = getSavedState(localStorageKey);
      // const savedState = '';
      // return merge(nextState, savedState);
      return nextState;
    }
    // save the next state to the application storage.
    // const stateToSave = pick(nextState, stateKeys);
    // setSavedState(stateToSave, localStorageKey);
    console.log('meta reducer 2');
    return nextState;
  };
}
