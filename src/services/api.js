// src/api.js
// import axios from 'axios';

// const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY; // Replace with your OpenWeather API key


// export const getWeatherData = (lat, lon) => {
//     const url = `https://api.openweathermap.org/data/3.0/onecall?lat=17&lon=80&exclude={part}&appid=${API_KEY}`;
//     return axios.get(url);
// };

// export const getCityName = (lat, lon) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
//     return axios.get(url);
// };

// export const getWeatherDataByCity = (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
//     return axios.get(url);
// };

// export const getCityCoordinates = (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
//     return axios.get(url);
// };


import axios from 'axios';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export const getWeatherData = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${API_KEY}`;
    return axios.get(url);
};

export const getCityName = (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    return axios.get(url);
};

export const getCityCoordinates = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    return axios.get(url);
};

export const getPrayerTimes = (lat, lon) => {
    const url = `https://api.aladhan.com/v1/timings?latitude=${lat}&longitude=${lon}&method=2`;
    return axios.get(url);
};