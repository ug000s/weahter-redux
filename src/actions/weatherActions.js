import { BASE_URL, API_KEY } from "../utils/constants.js";

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

export const fetchWeather = (city) => {
    return (dispatch) => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                dispatch(setWeather({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                }));
                dispatch(setMessage(''));
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                dispatch(setMessage('Enter correct city name'));
                dispatch(setWeather({}));
            });
    }
};
