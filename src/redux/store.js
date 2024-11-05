import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import prayerReducer from './prayerSlice';
import islamicDateReducer from './islamicDateSlice';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        weather: weatherReducer,
        prayer: prayerReducer,
        islamicDate: islamicDateReducer,
    },
});

export default store;
