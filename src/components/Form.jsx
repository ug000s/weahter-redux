import { useState } from "react";
import { BASE_URL, API_KEY } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { setWeather, setMessage } from "../actions/weatherActions.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getWeather = city => {
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

    const handleClickSubmit = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);
        setCity('');
    }
    return (
        <form onSubmit={handleClickSubmit}>
            <input type={'text'} value={city} onChange={(e) => setCity(e.target.value)} name={'city'}/>
            <button type={'submit'}>Get Weather</button>
        </form>
    )
}

export default Form;