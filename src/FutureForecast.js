import DailyForecast from "./DailyForecast";
import React from "react";

export default function FutureForecast(props) {
  return (
    <div className="row">
      <div className="col five-day-forecast">
        <p className="future-heading">5 Day Forecast</p>
        <div className="row forecast">
          <DailyForecast day="Fri" minTemp={6} maxTemp={11} icon="01d" />
          <DailyForecast day="Sat" minTemp={5} maxTemp={9} icon="02d" />
          <DailyForecast day="Sun" minTemp={5} maxTemp={11} icon="03d" />
          <DailyForecast day="Mon" minTemp={7} maxTemp={10} icon="04d" />
          <DailyForecast day="Tues" minTemp={4} maxTemp={11} icon="09d" />
        </div>
      </div>
    </div>
  );
}
