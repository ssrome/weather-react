import React from "react";
import Search from "./Search";
import TodaysForecast from "./TodaysForecast";
import ChangeUnit from "./ChangeUnit";
import FutureForecast from "./FutureForecast";

export default function WeatherApp() {
  return (
    <div className="row app">
      <div className="col">
        <Search />
        <TodaysForecast />
        <ChangeUnit />
        <FutureForecast />
      </div>
    </div>
  );
}
