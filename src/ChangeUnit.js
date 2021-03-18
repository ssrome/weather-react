import React from "react";

export default function ChangeUnit() {
  return (
    <div className="row">
      <div className="col">
        <div className="change-unit" id="change-unit">
          <button
            type="button"
            className="btn btn-primary mb-3 fahrenheit"
            id="fahrenheit"
          >
            Change to Fahrenheit
          </button>
        </div>
      </div>
    </div>
  );
}
