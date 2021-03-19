import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  return (
    <div className="col-2 daily">
      <ul className="forecast-elements">
        <li className="day">{props.day}</li>
        <li>
          <WeatherIcon
            icon={props.icon}
            description="weather"
            iconClass="daily-weather-icons"
          />
          {/* <img src="" alt="" /> */}
        </li>
        <li className="temp">
          <span className="max-temp">{props.maxTemp}°</span> /{" "}
          <span className="min-temp">{props.minTemp}°</span>
        </li>
      </ul>
    </div>
  );
}
