import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrayerTimes } from '../services/aladhanApi';
import { fetchWeather } from '../services/weatherApi';

const Home = () => {
  const dispatch = useDispatch();
  const prayerTimes = useSelector((state) => state.prayer.times);
  const weather = useSelector((state) => state.weather.data);

  useEffect(() => {
    const coordinates = { lat: 17.385044, lon: 78.486671 }; // Hyderabad coordinates
    dispatch(fetchPrayerTimes({ city: 'Hyderabad', country: 'India' }));
    dispatch(fetchWeather(coordinates));
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h2>Prayer Times</h2>
        {Array.isArray(prayerTimes) && prayerTimes.map((time, index) => (
          <div key={index}>{time.fajr}</div>
        ))}
      </div>
      <div>
        <h2>Weather</h2>
        {weather && (
          <div>
            <div>Temperature: {weather.current.temp}°C</div>
            <div>Weather: {weather.current.weather[0].description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
