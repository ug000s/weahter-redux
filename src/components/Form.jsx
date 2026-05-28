import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../features/api/weatherActions.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const handleClickSubmit = e => {
        e.preventDefault();
        dispatch(fetchWeather(city));
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