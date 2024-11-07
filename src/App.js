import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWeather } from './redux/weatherSlice';
import SearchCityCard from './components/Cards/SearchCityCard';
import PrayerTimesCard from './components/Cards/PrayerTimesCard';
import IslamicDateCard from './components/Cards/IslamicDateCard';
import Galaxy from './components/Cards/Galaxy';
//import MoonInfo from './components/Cards/MoonInfo';
import CounterCard from './components/Cards/CounterCard.js';
import MenuCard from './components/Cards/MenuCard.js';
import Header from './components/Header.js';

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
        <>
        
        <div className="container-fluid">
            <div className="row mt-3">
                <div className='col-sm-4'></div>
                <div className="col-sm-4">
                    <SearchCityCard />
                    <IslamicDateCard />
                    <PrayerTimesCard /> 
                    <Galaxy />
                    <CounterCard /> 
                   
                </div>
                <div className="col-sm-4">

                    
                </div>
                <div className="col-sm-4">
                    
                </div>
                
            </div>
        </div></>
    );
};

export default App;
