import {API_KEY, BASE_URL} from "../../utils/constants.js";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  'fetch/weather',
  async city => {
    const response = await fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    if (!response.ok) {
      throw new Error('Enter correct city name');
    }
    const data = await response.json();
    return {
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      pressure: data.main.pressure,
      sunset: data.sys.sunset * 1000
    };
  }
);

// object Date don't serialize, so we need to convert it to string
// export const fetchWeather = (city) => {
//     return (dispatch) => {
//         fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
//             .then(response => response.json())
//             .then(data => {
//                 dispatch(setWeather({
//                     city: data.name,
//                     country: data.sys.country,
//                     temp: data.main.temp,
//                     pressure: data.main.pressure,
//                     sunset: data.sys.sunset * 1000
//                 }));
//                 dispatch(setMessage(''));
//             })
//             .catch(error => {
//                 console.error('Error fetching weather data:', error);
//                 dispatch(setMessage('Enter correct city name'));
//                 dispatch(setWeather({}));
//             });
//     }
// };
