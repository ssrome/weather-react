import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function TodaysForecast() {
  return (
    <div className="row todays-forecast">
      <div className="col">
        <ul className="">
          <li className="todays-temp">8°C</li>
          <li id="todays-icon">
            <WeatherIcon
              icon="01d"
              description="weather"
              iconClass="todays-weather-icon"
            />
          </li>
          <li className="description" id="description">
            Scattered clouds
          </li>
        </ul>
      </div>
      <div className="col info">
        <ul className="additional-info">
          <li className="city" id="city">
            London
          </li>
          <li>
            <span id="time">Friday 17:58</span>
          </li>
          <li>
            Feels like: <span id="feels-like">2°C</span>
          </li>
          <li>
            Humidity: <span id="humidity">57</span>%
          </li>
          <li>
            Wind speed: <span id="wind-speed">15</span> mph
          </li>
          <li>
            Pressure: <span id="pressure">1001</span> hPa
          </li>
        </ul>
      </div>
    </div>
  );
}
