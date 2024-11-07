// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchWeather } from './redux/weatherSlice';
// // import SearchCityCard from './components/Cards/SearchCityCard';
// // import PrayerTimesCard from './components/Cards/PrayerTimesCard';
// // import IslamicDateCard from './components/Cards/IslamicDateCard';
// // import Galaxy from './components/Cards/Galaxy';
// // import CounterCard from './components/Cards/CounterCard.js';
// // import MenuCard from './components/Cards/MenuCard.js';
// import Header from './components/Header.js';
// import AppRoutes from './routes.js';

// import 'bootstrap/dist/css/bootstrap.min.css';

// const App = () => {
//     const dispatch = useDispatch();

//     useEffect(() => {
//         navigator.geolocation.getCurrentPosition((position) => {
//             const { latitude, longitude } = position.coords;
//             dispatch(fetchWeather({ lat: latitude, lon: longitude }));
//         });
//     }, [dispatch]);

//     return (
//         <>
//             <Header />
//             <AppRoutes />
//         </>
//     );
// };

// export default App;

//=================================================

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
