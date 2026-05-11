import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useState} from "react";
import {API_KEY, BASE_URL} from "../utils/constants.js";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState({});
    const [message, setMessage] = useState('Enter city name');

    const getWeather = city => {
        fetch(`${BASE_URL}/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            .then(response => response.json())
            .then(data => {
                setWeatherInfo({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: new Date(data.sys.sunset * 1000)
                });
                setMessage('');
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setMessage('Enter correct city name');
                setWeatherInfo({});
            });
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    )
}

export default Data;