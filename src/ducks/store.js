import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

import { loadState, saveState } from './localStorage';

import reducer from './reducer';

// Create an initial state from localstorage.js

const persistedState = loadState()

// Send in reducer, persistedState and promise middleware into store

const store = createStore(reducer, persistedState, applyMiddleware( promiseMiddleware() ));

// Calls saveState whenever there's a state change

store.subscribe(() => {
  saveState(store.getState());
});

export default store;