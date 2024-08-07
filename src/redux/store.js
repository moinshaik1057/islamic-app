import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import prayerReducer from './prayerSlice';
import islamicDateReducer from './islamicDateSlice';

export const store = configureStore({
    reducer: {
        weather: weatherReducer,
        prayer: prayerReducer,
        islamicDate: islamicDateReducer,
    },
});

export default store;
