import DailyForecast from "./DailyForecast";
import React from "react";

export default function FutureForecast() {
  return (
    <div className="row">
      <div className="col five-day-forecast">
        <p className="future-heading">5 Day Forecast</p>
        <div className="row forecast" id="forecast">
          <DailyForecast day="Fri" minTemp={6} maxTemp={11} icon="🌤" />
          <DailyForecast day="Sat" minTemp={5} maxTemp={9} icon="☁️" />
          <DailyForecast day="Sun" minTemp={5} maxTemp={11} icon="🌦" />
          <DailyForecast day="Mon" minTemp={7} maxTemp={10} icon="🌤" />
          <DailyForecast day="Tues" minTemp={4} maxTemp={11} icon="🌤" />
        </div>
      </div>
    </div>
  );
}
