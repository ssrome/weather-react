import React, { useState } from "react";
import DailyForecast from "./DailyForecast";
import axios from "axios";

export default function FutureForecast(props) {
  // const [coords, setCoords] = useState({})

  const [forecastData, setForecastData] = useState({});
  const [loaded, setLoaded] = useState(false);
  let onecallURL = "https://api.openweathermap.org/data/2.5/onecall?";
  let apiKey = `36f2435c265e75d4f4b5f9194c2525ab`;
  let apiUrl = `${onecallURL}lat=${props.coords.lat}&lon=${props.coords.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

  function updateForecast(response) {
    setForecastData(response.data);
    setLoaded(true);
  }
  function getForecast(props) {
    axios.get(apiUrl).then(updateForecast);
  }

  function convertTimestamp(timestamp, timezone) {
    return new Date((timestamp + timezone) * 1000);
  }

  if (loaded) {
    convertTimestamp(forecastData.daily[0].dt, forecastData.timezone_offset);

    return (
      <div className="row">
        <div className="col five-day-forecast">
          <p className="future-heading">Forecast</p>
          <div className="row forecast">
            <DailyForecast
              timestamp={convertTimestamp(
                forecastData.daily[0].dt,
                forecastData.timezone_offset
              )}
              minTemp={forecastData.daily[0].temp.min}
              maxTemp={forecastData.daily[0].temp.max}
              icon={forecastData.daily[0].weather[0].icon}
              description={forecastData.daily[0].weather[0].description}
            />
            <DailyForecast
              timestamp={convertTimestamp(
                forecastData.daily[1].dt,
                forecastData.timezone_offset
              )}
              minTemp={forecastData.daily[1].temp.min}
              maxTemp={forecastData.daily[1].temp.max}
              icon={forecastData.daily[1].weather[0].icon}
              description={forecastData.daily[1].weather[0].description}
            />
            <DailyForecast
              timestamp={convertTimestamp(
                forecastData.daily[2].dt,
                forecastData.timezone_offset
              )}
              minTemp={forecastData.daily[2].temp.min}
              maxTemp={forecastData.daily[2].temp.max}
              icon={forecastData.daily[2].weather[0].icon}
              description={forecastData.daily[2].weather[0].description}
            />
            <DailyForecast
              timestamp={convertTimestamp(
                forecastData.daily[3].dt,
                forecastData.timezone_offset
              )}
              minTemp={forecastData.daily[3].temp.min}
              maxTemp={forecastData.daily[3].temp.max}
              icon={forecastData.daily[3].weather[0].icon}
              description={forecastData.daily[3].weather[0].description}
            />
            <DailyForecast
              timestamp={convertTimestamp(
                forecastData.daily[4].dt,
                forecastData.timezone_offset
              )}
              minTemp={forecastData.daily[4].temp.min}
              maxTemp={forecastData.daily[4].temp.max}
              icon={forecastData.daily[4].weather[0].icon}
              description={forecastData.daily[4].weather[0].description}
            />
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
