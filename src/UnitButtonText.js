import React from "react";

export default function UnitButtonText(props) {
  if (props.unit === "Celsius") {
    return <span>Change to Fahrenheit</span>;
  } else {
    return <span>Change to Celsius</span>;
  }
}
