import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { weatherReducer } from '../reducer/weatherReducer.js';

import {thunk} from 'redux-thunk';
import {logger} from 'redux-logger';

const initialState = {
    weatherInfo: {},
    message: 'Enter city name'
};

export const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));