// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import getPrayerTimes from '../services/aladhanApi';

// export const fetchPrayerTimes = createAsyncThunk(
//     'prayer/fetchPrayerTimes',
//     async ({ lat, lon }) => {
//         const timings = await getPrayerTimes(lat, lon);
//         return timings;
//     }
// );

// const prayerSlice = createSlice({
//     name: 'prayer',
//     initialState: {
//         data: null,
//         loading: false,
//         error: null,
//     },
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchPrayerTimes.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchPrayerTimes.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload;
//             })
//             .addCase(fetchPrayerTimes.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             });
//     },
// });

// export default prayerSlice.reducer;


// prayerSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPrayerTimes = createAsyncThunk('prayer/fetchPrayerTimes', async ({ lat, lon }) => {
    const response = await axios.get(`https://api.aladhan.com/v1/timings`, {
        params: {
            latitude: lat,
            longitude: lon,
            method: 2
        }
    });
    return response.data.data.timings;
});

const prayerSlice = createSlice({
    name: 'prayer',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPrayerTimes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPrayerTimes.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchPrayerTimes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default prayerSlice.reducer;
