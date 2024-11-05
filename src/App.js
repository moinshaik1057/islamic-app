// App.js should NOT have a BrowserRouter or any other Router wrapping AppRoutes
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './redux/weatherSlice.js';
import { selectAuth } from './redux/authSlice.js';

import Header from './components/Header.js';
import AppRoutes from './routes.js'; // Your routes are here
//import MenuCard from './components/Cards/MenuCard.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const App = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(selectAuth);

 
    // Getting user's geo location
    useEffect(() => {
        if (isAuthenticated) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                dispatch(fetchWeather({ lat: latitude, lon: longitude }));
            });
        }
    }, [dispatch, isAuthenticated]);

    return (
        
                <>
                
                    {isAuthenticated ? (
                        <>
                            <Header />
                            <AppRoutes />  {/* Routes are defined here */}
                            
                        </>
                    ) : (
                        <AppRoutes />
                    )}
                
                
                    </>
    );
};

export default App;
