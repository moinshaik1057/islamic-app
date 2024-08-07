import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getWeather from '../services/weatherApi';

export const fetchWeather = createAsyncThunk('weather/fetchWeather', async ({ lat, lon }) => {
    const data = await getWeather(lat, lon);
    return data;
});

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        current: null,
        daily: [],
        cityName: '',
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.current = action.payload.current;
                state.daily = action.payload.daily;
                state.cityName = action.payload.cityName;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default weatherSlice.reducer;