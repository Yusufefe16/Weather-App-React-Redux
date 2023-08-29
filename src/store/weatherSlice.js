import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const apiKey = "964e084575afeec500b461a77f6dee92";
const units = "metric";

/* const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`; */

export const fetchWeatherData = createAsyncThunk(
  "weather/fetchData",
  async (_, { getState }) => {
    const currentState = getState();
    const cityName = currentState.weather.cityName;

    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=${units}`;

    const response = await axios.get(apiUrl);
    return response.data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    cityName: "İzmir",
    items: [],
    status: "idle",
    error: "",
    theme: true,
    current:"",
    minTemp: [],
    maxTemp: [],
    humidity: [],
    rain: [],
    averageWindSpeed: [],
    mostCommonWeather: [],
  },
  reducers: {
    setCity: (state, action) => {
      state.cityName = action.payload;
    },
    changeTheme: (state) => {
      state.theme = !state.theme;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      const forecastData = action.payload;
      for (let i = 0; i < 5; i++) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + i);
        const tomorrowStr = tomorrow.toISOString().slice(0, 10);
        const tomorrowWeather = forecastData.list
          .filter((item) => {
            const dateStr = item.dt_txt.slice(0, 10);
            return dateStr === tomorrowStr;
          })
          .map((item) => ({
            temperature: item.main.temp,
            humidity: item.main.humidity,
            rain: item.rain ? item.rain["3h"] : 0,
            windSpeed: item.wind.speed,
            mainWeather: item.weather[0].main,
            weatherDescription: item.weather[0].description,
          }));

        const weatherCounts = {};
        tomorrowWeather.forEach((weather) => {
          if (weatherCounts[weather.mainWeather]) {
            weatherCounts[weather.mainWeather]++;
          } else {
            weatherCounts[weather.mainWeather] = 1;
          }
        });

        let maxCount = 0;
        let mostCommonWeather = "";
        for (const weather in weatherCounts) {
          if (weatherCounts[weather] > maxCount) {
            maxCount = weatherCounts[weather];
            mostCommonWeather = weather;
          }
        }
        state.mostCommonWeather[i] = mostCommonWeather;

        const currentTemp = tomorrowWeather.map((item) => item.temperature);
        state.current = currentTemp[0];
        const minTemp = Math.min(
          ...tomorrowWeather.map((item) => item.temperature)
        );
        const maxTemp = Math.max(
          ...tomorrowWeather.map((item) => item.temperature)
        );

        state.minTemp[i] = minTemp;
        state.maxTemp[i] = maxTemp;

        const averageHumidity = (
          tomorrowWeather.reduce((sum, item) => sum + item.humidity, 0) /
          tomorrowWeather.length
        ).toFixed(2);
        state.humidity[i] = averageHumidity;

        const totalRain = tomorrowWeather
          .reduce((sum, item) => sum + item.rain, 0)
          .toFixed(2);
        state.rain[i] = totalRain;

        const averageWindSpeed = (
          tomorrowWeather.reduce((sum, item) => sum + item.windSpeed, 0) /
          tomorrowWeather.length
        ).toFixed(2);
        state.averageWindSpeed[i] = averageWindSpeed;
      }
      
    });
  },
});

export const { setCity, changeTheme } = weatherSlice.actions;

export default weatherSlice.reducer;
