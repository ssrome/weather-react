import React from "react";
import Date from "./Date";

export default function CurrentWeather(props) {
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
    <div className="col info">
      <ul className="additional-info">
        <li className="city">{props.city}</li>
        <li>
          Updated:{" "}
          <Date timestamp={props.timestamp.getDay()} full={props.full} />{" "}
          {formatTime(props.timestamp)}
        </li>
        <li>Humidity: {props.humidity}%</li>
        <li>Wind speed: {props.windSpeed} mph</li>
        <li>Pressure: {props.pressure} hPa</li>
      </ul>
    </div>
  );
}
