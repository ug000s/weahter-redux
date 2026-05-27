export const SET_WEATHER = 'SET_WEATHER';
export const SET_MESSAGE = 'SET_MESSAGE';

export const setWeather = (weather) => ({
    type: SET_WEATHER,
    payload: weather
});

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message
});
