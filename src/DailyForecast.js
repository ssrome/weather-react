import React from "react";
import WeatherIcon from "./WeatherIcon";
import Date from "./Date";

export default function DailyForecast(props) {

  function roundNumber(num) {
    return Math.round(num);
  }
    return (
    <div className="col-2 daily">
      <ul className="forecast-elements">
        <li className="day">
        <Date timestamp={props.timestamp.getDay()} full={false} />
        </li>
        <li>
          <WeatherIcon
            icon={props.icon}
            description={props.description}
            iconClass="daily-weather-icons"
          />
        </li>
        <li className="temp">
          <span className="max-temp">{roundNumber(props.maxTemp)}°</span> /{" "}
          <span className="min-temp">{roundNumber(props.minTemp)}°</span>
        </li>
      </ul>
    </div>
  );
}
