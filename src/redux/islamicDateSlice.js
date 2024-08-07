// src/redux/islamicDateSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIslamicDate = createAsyncThunk(
    'islamicDate/fetchIslamicDate',
    async () => {
        const response = await fetch('http://api.aladhan.com/v1/gToH');
        const data = await response.json();
        return data.data.hijri;
    }
);

const islamicDateSlice = createSlice({
    name: 'islamicDate',
    initialState: {
        date: null,
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIslamicDate.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchIslamicDate.fulfilled, (state, action) => {
                state.date = action.payload;
                state.loading = false;
            })
            .addCase(fetchIslamicDate.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default islamicDateSlice.reducer;
