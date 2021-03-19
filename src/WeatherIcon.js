import React from "react";

export default function WeatherIcon(props) {
  return (
    <span>
      <img
        src={`./icons/${props.icon}.svg`}
        alt={props.description}
        className={props.iconClass}
      />
    </span>
  );
}
