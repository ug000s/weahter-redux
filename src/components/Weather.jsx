import { useSelector } from "react-redux";

const Weather = () => {
    const weather = useSelector(state => state.weather);
    const message = useSelector(state => state.message);
    if (message) {
        return (
            <div className={'infoWeath'}>
                {message}
            </div>
        )
    } else {
        return (
            <div className={'infoWeath'}>
                <p>Location: {weather.country}, {weather.city}</p>
                <p>Temp: {weather.temp}</p>
                <p>Pressure: {weather.pressure}</p>
                <p>Sunset: {new Date(weather.sunset).toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Weather;