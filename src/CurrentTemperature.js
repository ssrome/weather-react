import React from "react";

export default function CurrentTemperature(props) {
  function roundNumber(num) {
    return Math.round(num);
  }
  if (props.unit === "Celsius") {
    return <li className="todays-temp">{roundNumber(props.temperature)}°C</li>;
  } else {
    return (
      <li className="todays-temp">
        {roundNumber((props.temperature * 9) / 5 + 32)}°F
      </li>
    );
  }
}
