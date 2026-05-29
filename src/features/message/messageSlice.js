import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/weatherActions.js";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWeather.pending, () => 'Loading weather data...')
            .addCase(fetchWeather.rejected, (state, action) => action.error.message)
            .addCase(fetchWeather.fulfilled, () => '')
    }
});

export default messageSlice.reducer;

