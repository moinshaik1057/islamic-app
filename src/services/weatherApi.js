// weatherApi.js
import axios from 'axios';

const getWeather = async (lat, lon) => {
    const weatherResponse = await axios.get(`https://api.openweathermap.org/data/3.0/onecall`, {
        params: {
            lat: lat,
            lon: lon,
            exclude: 'minutely,hourly,alerts',
            appid: process.env.REACT_APP_OPENWEATHER_API_KEY,
            units: 'metric'
        }
    });

    const geocodeResponse = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse`, {
        params: {
            lat: lat,
            lon: lon,
            limit: 1,
            appid: process.env.REACT_APP_OPENWEATHER_API_KEY
        }
    });

    const cityName = geocodeResponse.data[0].name;

    console.log(cityName);

    return {
        ...weatherResponse.data,
        cityName: cityName
    };
};

export default getWeather;
