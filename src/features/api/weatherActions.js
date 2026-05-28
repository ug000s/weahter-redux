import { BASE_URL, API_KEY } from "../../utils/constants.js";
import { setWeather } from "../weather/weatherSlice.js";
import { setMessage } from "../message/messageSlice.js";

// object Date don't serialize, so we need to convert it to string
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
                    sunset: data.sys.sunset * 1000
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
