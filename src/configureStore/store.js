import { legacy_createStore as createStore } from 'redux';
import { weatherReducer } from '../reducer/weatherReducer.js';

const initialState = {
    weatherInfo: {},
    message: 'Enter city name'
};

export const store = createStore(weatherReducer, initialState);