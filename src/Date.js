import React from "react";
export default function Date(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  function formatDay(props) {
    let day = days[props.timestamp];
    if (props.full) {
      return day;
    } else {
      return day.substring(0, 3);
    }
  }
  return <span>{formatDay(props)}</span>;
}
