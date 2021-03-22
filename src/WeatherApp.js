import React, { useState } from "react";
import TodaysForecast from "./TodaysForecast";
import ChangeUnit from "./ChangeUnit";
import FutureForecast from "./FutureForecast";
//import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function WeatherApp() {
  const units = "metric";
  const [city, setCity] = useState("London");
  let apikey = `36f2435c265e75d4f4b5f9194c2525ab`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apikey}`;
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function updateCity(event) {
    setCity(event.target.value.trim());
  }

  function roundNumber(num) {
    return Math.round(num);
  }

  function weatherResponse(response) {
    if (response.status === 200) {
      setWeatherData({
        cityResponse: response.data.name,
        humidity: response.data.main.humidity,
        pressure: response.data.main.pressure,
        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        windSpeed: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        loaded: true,
      });
    }
  }

  function getWeather() {
    axios
      .get(apiUrl)
      .then(weatherResponse)
      .catch(function (error) {
        alert("The city entered hasn't been found. Try another city.");
      });
  }

  function handleSubmit(event, city) {
    event.preventDefault();
    getWeather(city);
  }
  if (weatherData.loaded) {
    return (
      <div className="row app">
        <div className="col">
          <div className="row search">
            <div className="col">
              <form
                onSubmit={handleSubmit}
                className="row gy-2 gx-3 align-items-center"
                id="search-city"
              >
                <div className="col-auto">
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="fas fa-search"></i>
                      <i className="bi bi-search"></i>
                    </div>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter city"
                      aria-label="Search"
                      id="city-input"
                      autoComplete="off"
                      onChange={updateCity}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    className="btn btn-primary"
                    id="search-button"
                    type="submit"
                  >
                    Search City
                  </button>
                </div>
                <div className="col-auto">
                  <button
                    id="current-location"
                    className="btn btn-secondary current-location"
                    type="button"
                  >
                    Current Location
                  </button>
                </div>
              </form>
            </div>
          </div>

          <TodaysForecast
            city={weatherData.cityResponse}
            temperature={roundNumber(weatherData.temperature)}
            feelsLikeTemp={roundNumber(weatherData.feelsLike)}
            humidity={weatherData.humidity}
            icon={weatherData.icon}
            description={weatherData.description}
            windSpeed={roundNumber(weatherData.windSpeed * 2.237)}
            pressure={weatherData.pressure}
          />
          <ChangeUnit />
          <FutureForecast />
          {/* <div className="row">
            <div className="col five-day-forecast">
              <p className="future-heading">5 Day Forecast</p>
              <div className="row forecast" id="forecast">
                <DailyForecast day="Fri" minTemp={6} maxTemp={11} icon="01d" />
                <DailyForecast day="Sat" minTemp={5} maxTemp={9} icon="02d" />
                <DailyForecast day="Sun" minTemp={5} maxTemp={11} icon="03d" />
                <DailyForecast day="Mon" minTemp={7} maxTemp={10} icon="04d" />
                <DailyForecast day="Tues" minTemp={4} maxTemp={11} icon="09d" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  } else {
    getWeather();
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}
