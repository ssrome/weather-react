import React, { useState } from "react";
import axios from "axios";
import CurrentWeather from "./CurrentWeather";
//import FutureForecast from "./FutureForecast";
import UnitButtonText from "./UnitButtonText";
import CurrentTemperature from "./CurrentTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherApp(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ loaded: false });
  const [unit, setUnit] = useState("Celsius");

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
        timestamp: new Date(response.data.dt * 1000),
        description: response.data.weather[0].description,
        coords: {
          lat: response.data.coord.lat,
          lon: response.data.coord.lon,
        },
        loaded: true,
      });
    }
  }

  function getWeather() {
    let units = "metric";
    let apikey = `36f2435c265e75d4f4b5f9194c2525ab`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apikey}`;
    axios
      .get(apiUrl)
      .then(weatherResponse)
      .catch(function (error) {
        alert("The city entered hasn't been found. Try another city.");
      });
  }

  function convertTemperature(event) {
    event.preventDefault();

    if (unit === "Celsius") {
      setUnit("Fahrenheit");
    } else {
      setUnit("Celsius");
    }
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
              >
                <div className="col-9 col-lg-9 col-md-9 col-sm-7">
                  <div className="input-group">
                    <div className="input-group-text">
                      <i className="fas fa-search"></i>
                    </div>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Enter city"
                      aria-label="Search"
                      autoComplete="off"
                      onChange={updateCity}
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">
                    Search City
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row todays-forecast">
            <div className="col">
              <ul>
                <CurrentTemperature
                  temperature={weatherData.temperature}
                  unit={unit}
                />
                <li>
                  <WeatherIcon
                    icon={weatherData.icon}
                    description={weatherData.description}
                    iconClass="todays-weather-icon"
                  />
                </li>
                <li className="description">{weatherData.description}</li>
              </ul>
            </div>
            <CurrentWeather
              city={weatherData.cityResponse}
              humidity={weatherData.humidity}
              icon={weatherData.icon}
              description={weatherData.description}
              windSpeed={roundNumber(weatherData.windSpeed * 2.237)}
              pressure={weatherData.pressure}
              timestamp={weatherData.timestamp}
              full={true}
            />
          </div>

          {/* <ChangeUnit /> */}
          <div className="row">
            <div className="col">
              <div className="change-unit">
                <button
                  type="button"
                  onClick={convertTemperature}
                  className="btn btn-primary mb-3"
                >
                  <UnitButtonText unit={unit} />
                </button>
              </div>
            </div>
          </div>
          {/* <FutureForecast coords={weatherData.coords} /> */}
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
