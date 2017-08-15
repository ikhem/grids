import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import { loadState, saveState } from './localStorage';

import reducer from './reducer';

const persistedState = loadState()

console.log("persistedState: ", persistedState);

const store = createStore(reducer, persistedState, applyMiddleware( promiseMiddleware() ));

console.log("store b4 subscribe:", store.getState());

// Calls saveState whenever there's a state change
store.subscribe(() => {
  saveState(store.getState());
  // saveState(reducer);
});

console.log("store: ", store.getState());
export default store;