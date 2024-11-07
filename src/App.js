import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { fetchWeather } from './redux/weatherSlice';
import Header from './components/Header.js';
import AppRoutes from './routes.js';
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
        <BrowserRouter>
            <Header />
            <AppRoutes />
        </BrowserRouter>
    );
};

export default App;
