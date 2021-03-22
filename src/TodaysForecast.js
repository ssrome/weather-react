import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function TodaysForecast(props) {
  return (
    <div className="row todays-forecast">
      <div className="col">
        <ul className="">
          <li className="todays-temp">{props.temperature}°C</li>
          <li id="todays-icon">
            <WeatherIcon
              icon={props.icon}
              description={props.description}
              iconClass="todays-weather-icon"
            />
          </li>
          <li className="description" id="description">
            {props.description}
          </li>
        </ul>
      </div>
      <div className="col info">
        <ul className="additional-info">
          <li className="city" id="city">
            {props.city}
          </li>
          <li>
            <span id="time">Friday 17:58</span>
          </li>
          <li>
            Feels like: <span id="feels-like">{props.feelsLikeTemp}°C</span>
          </li>
          <li>
            Humidity: <span id="humidity">{props.humidity}</span>%
          </li>
          <li>
            Wind speed: <span id="wind-speed">{props.windSpeed}</span> mph
          </li>
          <li>
            Pressure: <span id="pressure">{props.pressure}</span> hPa
          </li>
        </ul>
      </div>
    </div>
  );
}
