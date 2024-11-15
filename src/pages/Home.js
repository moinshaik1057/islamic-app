//import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchPrayerTimes } from '../services/aladhanApi';
// import { fetchWeather } from '../services/weatherApi';

import SearchCityCard from '../components/Cards/SearchCityCard';
import PrayerTimesCard from '../components/Cards/PrayerTimesCard';
import IslamicDateCard from '../components/Cards/IslamicDateCard';
import Galaxy from '../components/Cards/Galaxy';
import CounterCard from '../components/Cards/CounterCard.js';

const Home = () => {
  

  return (
    <>
    <div className='container-fluid mt-5-half'>
    <div className='row'>
    <div className='col-sm-4'></div>
    <div className='col-sm-4'>
        <SearchCityCard />
        <IslamicDateCard />
        <PrayerTimesCard /> 
        <Galaxy />
        <CounterCard /> 
    </div>
    <div className='col-sm-4'></div></div>
    </div>
    </>
  );
};

export default Home;
