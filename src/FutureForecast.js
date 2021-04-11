import React, { useState } from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function FutureForecast(props) {
  // const [coords, setCoords] = useState({});

  // function updateCoords(event) {
  //   setCoords({
  //     lat: props.coords.lat,
  //     long: props.coords.lon,
  //   });
  // }

  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  let onecallURL = "https://api.openweathermap.org/data/2.5/onecall?";
  let apiKey = `36f2435c265e75d4f4b5f9194c2525ab`;
  let latitude = props.coords.lat;
  let longitude = props.coords.lon;
  let apiUrl = `${onecallURL}lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  function updateForecast(response) {
    setForecastData(response.data.daily.slice(0, 5));
    setLoaded(true);
  }
  function getForecast() {
    axios.get(apiUrl).then(updateForecast);
  }

  function convertTimestamp(timestamp) {
    return new Date(timestamp * 1000);
  }

  function convertTemperature(temperature, unit) {
    if (unit === "Celsius") {
      return temperature;
    } else {
      return (temperature * 9) / 5 + 32;
    }
  }

  if (loaded) {
    return (
      <div className="row">
        <div className="col five-day-forecast">
          <p className="future-heading">Forecast</p>
          <div className="row forecast">
            {forecastData.map((forecast, index) => (
              <DailyForecast
                key={index}
                timestamp={convertTimestamp(forecast.dt)}
                minTemp={convertTemperature(forecast.temp.min, props.unit)}
                maxTemp={convertTemperature(forecast.temp.max, props.unit)}
                icon={forecast.weather[0].icon}
                description={forecast.weather[0].description}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    getForecast();

    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
}
