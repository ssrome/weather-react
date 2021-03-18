import React from "react";

export default function DailyForecast(props) {
  return (
    <div className="col-2 daily">
      <ul className="forecast-elements">
        <li className="day">{props.day}</li>
        <li className="daily-weather-icons">
          {/* <img src="" alt="" /> */}
          <span className="emojiIcons">{props.icon}</span>
        </li>
        <li className="temp">
          <span className="max-temp">{props.maxTemp}°</span> /{" "}
          <span className="min-temp">{props.minTemp}°</span>
        </li>
      </ul>
    </div>
  );
}
