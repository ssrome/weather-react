import React from "react";
import WeatherIcon from "./WeatherIcon";
import Date from "./Date";

export default function TodaysForecast(props) {
  function changeToDoubleDigits(time) {
    if (time < 10) {
      return `0${time}`;
    } else {
      return time;
    }
  }
  function formatTime(timestamp) {
    let hour = timestamp.getHours();
    let minutes = timestamp.getMinutes();
    return `${changeToDoubleDigits(hour)}:${changeToDoubleDigits(minutes)}`;
  }
  return (
    <div className="row todays-forecast">
      <div className="col">
        <ul>
          <li className="todays-temp">{props.temperature}°C</li>
          <li>
            <WeatherIcon
              icon={props.icon}
              description={props.description}
              iconClass="todays-weather-icon"
            />
          </li>
          <li className="description">{props.description}</li>
        </ul>
      </div>
      <div className="col info">
        <ul className="additional-info">
          <li className="city">{props.city}</li>
          <li>
            <Date timestamp={props.timestamp.getDay()} full={props.full} />{" "}
            {formatTime(props.timestamp)}
          </li>
          <li>Feels like: {props.feelsLikeTemp}°C</li>
          <li>Humidity: {props.humidity}%</li>
          <li>Wind speed: {props.windSpeed} mph</li>
          <li>Pressure: {props.pressure} hPa</li>
        </ul>
      </div>
    </div>
  );
}
