import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './redux/weatherSlice';
import SearchCityCard from './components/Cards/SearchCityCard';
import WeatherCard from './components/Cards/WeatherCard';
import PrayerTimesCard from './components/Cards/PrayerTimesCard';
import IslamicDateCard from './components/Cards/IslamicDateCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            dispatch(fetchWeather({ lat: latitude, lon: longitude }));
        });
    }, [dispatch]);

    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-sm-4">
                    <SearchCityCard />
                    <IslamicDateCard />
                    <PrayerTimesCard /> 
                    <WeatherCard />
                </div>
                <div className="col-sm-4">
                    
                </div>
                <div className="col-sm-4">
                    
                </div>
                
            </div>
        </div>
    );
};

export default App;
